const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const { createAnAdminAccount } = require('./utils/common');


const app = express();

const port = process.env.PORT;
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {})
    .then(() => {
        console.log('Connected to MongoDB');
        createAnAdminAccount();
    })
    .catch(err => 
        console.err(`Error connecting to MongoDB: ${err}`));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});