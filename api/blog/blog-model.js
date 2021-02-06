const db = require('../../data/dbConfig');

module.exports = {
	get,
	getById,
	post,
	update,
	remove
}

async function get() {
	const sql = await db('blog').toString();
	console.log(sql);

	const blog = await db('blog');
	return blog;
}

async function getById(id) {
	const blog = await db('blog').where(
		'id',
		id
	);
	return blog;
}

async function post(blogData) {
	const blog = await db.insert(blogData).into('blog');
	return blog;
}

async function update(id, changes) {
	if (id && changes) {
		return await db('blog').where({
			id
		}).update(changes).then(count => (count > 0 ? this.getById(id) : null));
	} else {
		return null;
	};
}

async function remove(id) {
	const count = await db.del().from('blog').where({
		id
	});
	return count;
}