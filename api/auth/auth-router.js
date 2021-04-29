const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets');
const Users = require('../users/user-model.js');

router.post('/signup', async (req, res, next) => {
	const data = req.body;

	const hash = bcrypt.hashSync(data.password, 12);
	data.password = hash;

	try {
		const savedData = await Users.add(data);
		res.status(201).json(savedData);
	} catch (err) {
		next(err);
	}
})

router.post('/login', async (req, res, next) => {
	let {
		username,
		password
	} = req.body;

	try {
		const user = await Users.findBy({
			username
		}).first();
		if (user && bcrypt.compareSync(password, user.password)) {
			const token = createToken(user);
			/*req.session.user = user;*/
			res.status(200).json({
				message: `Welcome ${user.username}!`, token,
			});
		} else {
			res.status(401).json({
				message: 'invalid credentials'
			});
		}
	} catch (err) {
		next(err)
	}
})

function createToken(user) {
  const payload = {
      subject: user.id,
      username: user.username,
  }

  const secret = jwtSecret;

  const options = {
      expiresIn: '2h'
  }
  return jwt.sign(payload, secret, options)
}

module.exports = router;