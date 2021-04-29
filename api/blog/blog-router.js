const express = require('express');
const isLoggedIn = require('../auth/is-logged-in');
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

router.post('/', /*isLoggedIn*/ checkBlogPost, async (req, res, next) => {
	const blogData = req.body;
	try {
		const data = await Blog.post(blogData);
		res.json(data);
	} catch (err) {
		next(err);
	}
})

router.put('/:id', /*isLoggedIn*/ async (req, res, next) => {
	const {
		id
	} = req.params;
	const changes = req.body;

	try {
		const changedBlogPost = await Blog.update(id, changes);
		if (changedBlogPost) {
			res.json(changedBlogPost);
		} else {
			res.status(404).json({
				message: 'invalid id'
			});
		}
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', /*isLoggedIn*/ async (req, res, next) => {
	const {
		id
	} = req.params;

	try {
		const count = await Blog.remove(id);
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

function checkBlogPost(req, res, next) {
	const blogData = req.body;
	if (!blogData.title || !blogData.body) {
		const err = new Error('Body must include a title and body');
		err.statusCode = 400;
		next(err);
	} else {
		next();
	}
}

module.exports = router;