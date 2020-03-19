require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@aircnc-fjikz.mongodb.net/aircnc?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);