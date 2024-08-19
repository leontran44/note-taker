const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

// HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});