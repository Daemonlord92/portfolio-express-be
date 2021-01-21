
exports.up = function(knex) {
  return knex.schema.createTable('bug-tracker', function(bugs) {
  	bugs.increments();
  	bugs.string('bug_issue', 1024).notNullable();
  	bugs.string('github_url').notNullable();
  	bugs.string('tools').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bug-tracker');
};
