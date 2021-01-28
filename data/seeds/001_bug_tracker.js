
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bug-tracker').del()
    .then(function () {
      // Inserts seed entries
      return knex('bug-tracker').insert([
        {id: 1, bug_issue: 'Creating test data to work with on bug-tracker', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 2, bug_issue: 'working on bootstrap design', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 3, bug_issue: 'Begin to work on the homepage', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 4, bug_issue: 'Setup Project page and testing data', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 5, bug_issue: 'Setup blog page and testing', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 6, bug_issue: 'Setup the contact page, and using the homepage outline to setup about me page', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 7, bug_issue: 'Fixed a Compile error on the Bug[], changed to BugTracker[]', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 8, bug_issue: 'Working on about me Page', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 9, bug_issue: 'Adding a form to bug tracker to add bugs', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 10, bug_issue: 'Create a form for BlogNewComponent and create BlogNewComponent', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 11, bug_issue: 'Working on Pagination for BugTrackerComponent using jw-angular-pagination', github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 12, bug_issue: "Impletementing Pagination for blog post", github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 13, bug_issue: "Working on the tablet and mobile version of the site!", github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},
        {id: 14, bug_issue: "Corrected Link bug in bug-tracker!", github_url: 'https://github.com/Daemonlord92/Developer-portfoilo-fe', tools:'Angular'},

      ]);
    });
};
