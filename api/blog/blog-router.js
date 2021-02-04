const express = require('express');

const Blog = require('./blog-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const data = await Blog.get();
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
})


// MIDDLEWARE

router.use((err, req, res, next) => {
	err.statusCode = err.statusCode ? err.statusCode : 500;
	res.status(err.statusCode).json({
		mes: err.message,
		stack: err.stack
	})
})

module.exports = router;