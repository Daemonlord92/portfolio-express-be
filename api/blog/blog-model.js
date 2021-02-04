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