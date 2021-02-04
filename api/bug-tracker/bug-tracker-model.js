const db = require('../../data/dbConfig');

module.exports = {
	get,
	newBug,
	editBug
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

function editBug(id, changes) {
	db('bug-tracker').where({
			id
		}).update(changes)
		.then(count => {
			return count;
		})
		.catch(err => {
			throw err;
		})
}