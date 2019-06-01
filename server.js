
const express = require('express');
const path = require(`path`);
const app = express();

app.use(express.static(__dirname + '/public')); // static directory containing css files, etc.


// routes

// index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});


// virtual machine show-off project
app.get('/VM', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/VM.html'));
});

// virtual machine documentation
app.get('/VM/Docs', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/VM-Docs.html'));
});

// virtual machine system
app.get('/VM/System', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/VM-Docs.html'));
});


// generalized about page
app.get('/Virtual-Reality-Club', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/VM-Docs.html'));
});


// dd
app.get('/VM/Docs', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/VM-Docs.html'));
});



// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});




