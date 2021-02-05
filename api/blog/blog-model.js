const db = require('../../data/dbConfig');

module.exports = {
	get,
}

async function get() {
	const sql = await db('blog').toString();
	console.log(sql);

	const blog = await db('blog');
	return blog;
}

async function getById(id) {
	const blog = await db.first('*').from('blog').where({
		id
	});
	return blog;
}

async function post(data) {
	const [blogId] = await db.insert(data).into('blog');
	const blog = await getById(blogId);
	return blog;
}

function update(id, changes) {
	db('blog').where({
			id
		}).update(changes)
		.then(count => {
			return count;
		})
		.catch(err => {
			throw err;
		});
}

async function remove(id) {
	const count = await db.del().from('blog').where({
		id
	});
	return count;
}