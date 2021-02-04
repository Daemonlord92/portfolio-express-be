const express = require('express');
const helmet = require('helmet');

const cors = require('cors');

const BugTrackerRouter = require('./bug-tracker/bug-tracker-router');
const BlogRouter = require('./blog/blog-router');

const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/bugtracker', BugTrackerRouter);
server.use('/api/blog', BlogRouter);


server.get('/', (req, res) => {
	res.status(200).json({
		mes: "HI, from the backend"
	});
});

module.exports = server;