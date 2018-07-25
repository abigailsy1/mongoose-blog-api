const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/my-blog', { useMongoClient: true });
mongoose.Promise = Promise;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
});

app.put('/:id', (req, res) => {
    res.status(200).send();
});

app.post('/', (req, res) => {
    res.status(200).send();
});

app.delete('/:id', (req, res) => {
    res.status(200).send();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;