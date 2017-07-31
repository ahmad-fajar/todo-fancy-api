const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));


const index = require('./routers/index');
const task  = require('./routers/task');
// const user  = require('./routers/user');

app.use('/', index);
app.use('/task', task);


mongoose.connect('mongodb://localhost/todo-fancy')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(3000, () => console.log('Listening: localhost:3000'));
})

