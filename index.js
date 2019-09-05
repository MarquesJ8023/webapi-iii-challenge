// code away!
require('dotenv').config()
const express = require('express');

const server = express();

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
