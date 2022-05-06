const express = require('express');
require('dotenv').config()
const app = express();
const main = () => {
  app.use(express.json());

  app.listen(process.env.PORT, () => console.log(`listening port ${process.env.PORT}`));
};

main();
