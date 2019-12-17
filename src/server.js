const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://dabela:dabela@cluster0-jctst.mongodb.net/starwars?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
app.use(cors());

mongoose.set('useCreateIndex', true);

app.use(express.json());

app.use(require('./routes'));

app.listen(process.env.PORT || 3333);