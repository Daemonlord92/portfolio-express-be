const express = require('express');
const isLoggedIn = require('../auth/is-logged-in');
const BugTracker = require('./bug-tracker-model');
const restrict = require('../middleware/restricted');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const data = await BugTracker.get()
		res.status(200).json(data)
	} catch (err) {
		next(err)
	}
})

router.post('/', /*isLoggedIn*/ checkBugTrackerPost, async (req, res, next) => {
	const body = req.body;
	try {
		const data = await BugTracker.newBug(body);
		res.json(data);
	} catch (err) {
		next(err);
	}
})

router.put('/', /*isLoggedIn*/ checkBugTrackerPost, async (req, res, next) => {
	const {
		id
	} = req.params;
	const changes = req.body;

	try {
		const changedBugTrackerPost = await BugTracker.editBug(id, changes);
		if (changedBugTrackerPost) {
			res.json(changedBugTrackerPost);
		} else {
			res.status(404).json({
				message: 'invalid id'
			});
		}
	} catch (err) {
		next(err);
	}
});

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