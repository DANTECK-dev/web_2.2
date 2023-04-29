const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
    console.log(req.url)
    next()
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/color.js', (req,res) => {
    res.sendFile(__dirname + '/color.js');
});

app.get('/time.js', (req,res) => {
    res.sendFile(__dirname + '/time.js');
});

app.get('/wrapper.js', (req,res) => {
    res.sendFile(__dirname + '/wrapper.js');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
