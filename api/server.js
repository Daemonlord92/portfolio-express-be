const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const knexSessionStore = require('connect-session-knex');

const cors = require('cors');

const BugTrackerRouter = require('./bug-tracker/bug-tracker-router');
const BlogRouter = require('./blog/blog-router');
const ProjectRouter = require('./project/project-router');
const authRouter = require('./auth/auth-router');

const server = express();

/*const sessionConfig = {
	name: 'mjmsession',
	secret: '7bfece61a4dbbc7b427355fd1499a851',
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false,
		httpOnly: true
	},
	resave: false,
	saveUninitialized: false,

	store: new knexSessionStore({
		knex: require("../data/dbConfig.js"),
		tablename: "sessions",
		sidfieldname: "sid",
		createtable: true,
		clearInterval: 1000 * 60 * 60
	})
}*/

server.use(cors());
server.use(helmet());
server.use(express.json());
/*server.use(session(sessionConfig));*/

server.use('/api/bugtracker', BugTrackerRouter);
server.use('/api/blog', BlogRouter);
server.use('/api/project', ProjectRouter);
server.use("/api/auth", authRouter);


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
	});
});

module.exports = server;