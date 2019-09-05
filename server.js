const express = 'express';
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter.js');
const server = express();

console.log('environment:', process.env.NODE_ENV);

server.use(express.json());
server.use(logger);

server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  const date = new Date();
  console.log(`(Logger) Request type: ${req.method}, Request url: ${req.url}, Timestamp: ${date}`)
  next();
};

module.exports = server;
