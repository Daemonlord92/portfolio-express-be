const express = require('express');

const Project = require('./project-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const data = await Project.get();
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
})

router.post('/', checkProjectPost, async (req, res, next) => {
	const body = req.body;
	try {
		const data = await Project.post(body);
		res.json(data);
	} catch (err) {
		next(err);
	}
})

router.put('/:id', async (req, res, next) => {
	const {
		id
	} = req.params;
	const changes = req.body;

	try {
		const changedProjectPost = await Project.update(id, changes);
		if (changedProjectPost) {
			res.json(changedProjectPost);
		} else {
			res.status(404).json({
				message: 'invalid id'
			});
		}
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	const {
		id
	} = req.params;

	try {
		const count = await Project.remove(id);
		if (count) {
			res.json({
				message: `Deleted ${count} records`
			});
		} else {
			res.status(404).json({
				message: 'invalid id'
			});
		}
	} catch (err) {
		next(err);
	}
})

// MIDDLEWARE

function checkProjectPost(req, res, next) {
	const body = req.body;
	if (!body.portfolio_title || !body.github_url || !body.heroku_url || !body.tools) {
		const err = new Error('Body must include a title and body');
		err.statusCode = 400;
		next(err);
	} else {
		next();
	}
}

module.exports = router;