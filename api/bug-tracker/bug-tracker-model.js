const db = require('../../data/dbConfig');

module.exports = {
	get
}

async function get() {
	const sql = await db('bug-tracker').toString();
	console.log(sql);

	const bugTracker = await db('bug-tracker');
	return bugTracker;
}