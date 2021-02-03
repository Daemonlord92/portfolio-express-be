exports.up = function(knex) {
	return knex.schema.createTable('blog', function(blogs) {
		blogs.increments();
		blogs.string('title', 1024).notNullable();
		blogs.string('body', 3250).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('blog');
};