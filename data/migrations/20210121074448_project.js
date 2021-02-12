exports.up = function(knex) {
	return knex.schema.createTable('project', function(projects) {
		projects.increments();
		projects.string('portfolio_title', 256).notNullable().unique();
		projects.string('github_url').notNullable();
		projects.string('heroku_url').notNullable();
		projects.string('tools').notNullable();
		projects.string('img_url');
	})
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('project');
};