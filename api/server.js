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

//MIDDLEWARE
server.use((err, req, res, next) => {
	err.statusCode = err.statusCode ? err.statusCode : 500;
	res.status(err.statusCode).json({
		mes: err.message,
		stack: err.stack
	})
})

module.exports = server;