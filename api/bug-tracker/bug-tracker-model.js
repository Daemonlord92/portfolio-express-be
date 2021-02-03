const db = require('../../data/dbConfig');

module.exports = {
	get,
	newBug,
}

async function get() {
	const sql = await db('bug-tracker').toString();
	console.log(sql);

	const bugTracker = await db('bug-tracker');
	return bugTracker;
}

async function newBug(data) {
	const newBug = await db.insert(data).into('bug-tracker');
	return newBug;
}