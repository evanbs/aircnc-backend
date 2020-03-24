require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@aircnc-fjikz.mongodb.net/aircnc?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(process.env.PORT);
