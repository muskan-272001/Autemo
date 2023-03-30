const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config(); // For emvironment variables

const app = express();

app.use(express.json()); // Parse data in JSON format

const URL = process.env.MONGODBURL;

// Connect with MONGO DB
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MONGO DB CONNECTED SUCCESSFULLY');
    })
    .catch(err => console.log(err));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/levelOne', require('./routes/level1'));
app.use('/levelTwo', require('./routes/level2'));
app.use('/levelThree', require('./routes/level3'));

// if (process.env.NODE_ENV === 'production') {
app.use(express.static('client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});