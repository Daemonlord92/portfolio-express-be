const db = require('../../data/dbConfig');

module.exports = {
	get,
	getById,
	post,
	update,
	remove
}

async function get() {
	const sql = await db('project').toString();
	console.log(sql);

	const project = await db('project');
	return project;
}

async function getById(id) {
	const project = await db('project').where(
		'id',
		id
	);
	return project;
}

async function post(data) {
	const project = await db.insert(data).into('project');
	return project;
}

async function update(id, changes) {
	if (id && changes) {
		return await db('project').where({
			id
		}).update(changes).then(count => (count > 0 ? this.getById(id) : null));
	} else {
		return null;
	};
}

async function remove(id) {
	const count = await db.del().from('project').where({
		id
	});
	return count;
}