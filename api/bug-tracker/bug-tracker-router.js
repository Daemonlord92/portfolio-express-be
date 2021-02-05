const express = require('express');

const BugTracker = require('./bug-tracker-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const data = await BugTracker.get()
		res.status(200).json(data)
	} catch (err) {
		next(err)
	}
})

router.post('/', checkBugTrackerPost, async (req, res, next) => {
	const body = req.body;
	try {
		const data = await BugTracker.newBug(body);
		res.json(data);
	} catch (err) {
		next(err);
	}
})

// MIDDLEWARE

function checkBugTrackerPost(req, res, next) {
	const body = req.body;
	if (!body.bug_issue || !body.github_url || !body.tools) {
		const err = new Error('Body must include Issue, URL, and tools');
		err.statusCode = 400;
		next(err);
	} else {
		next();
	}
}

module.exports = router;