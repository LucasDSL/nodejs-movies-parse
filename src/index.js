const express = require('express');
const Parse = require('parse/node');
const { ParseServer } = require('parse-server');
const authRoutes = require('./auth/auth.routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

const app = express();

const main = () => {
  // Connecting app to Parse Server
  Parse.initialize(process.env.APP_ID, process.env.JS_KEY, process.env.PARSE_MASTER_KEY);
  Parse.serverURL = process.env.SERVER_URL;

  // Local instance of Parse Server
  const parseServerAPI = ParseServer({
    databaseURI: process.env.DB_URL,
    appId: process.env.APP_ID,
    masterKey: process.env.PARSE_MASTER_KEY,
    serverURL: process.env.SERVER_URL
  });

  app.use(express.json());
  app.use('/parse', parseServerAPI);
  app.use('/auth', authRoutes);
  app.use(errorHandler);

  app.listen(process.env.PORT, () => console.log(`listening port ${process.env.PORT}`));
};

main();
