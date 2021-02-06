exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function() {
      // Inserts seed entries
      return knex('project').insert([{
        portfolio_title: 'Excursion',
        github_url: 'https://github.com/Daemonlord92/excursion',
        heroku_url: 'https://daemonlord92.github.io/excursion/',
        tools: 'HTML, CSS, Image',
        img_url: 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg'
      }, {
        portfolio_title: 'Tesla Clone',
        github_url: 'https://github.com/Daemonlord92/bottega-tesla-clone',
        heroku_url: 'https://daemonlord92.github.io/bottega-tesla-clone/',
        tools: 'HTML, CSS, Image',
        img_url: 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg'
      }, {
        portfolio_title: 'DevDesk Queue',
        github_url: 'https://github.com/devdesk-queue-bw-pt/front-end',
        heroku_url: 'https://devdesk-queue-bw-pt.github.io/front-end/',
        tools: 'React, Redux, Bootstrap',
        img_url: 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg'
      }]);
    });
};