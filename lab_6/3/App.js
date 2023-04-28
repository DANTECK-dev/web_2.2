const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let messages = [];
let index = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client.html');
});
app.get('/messages', (req, res) => {
    const startIndex = req.query.index || 0;
    const newMessages = messages.slice(startIndex);
    res.send(newMessages);
});

app.post('/messages', (req, res) => {
    const message = req.body.message;
    messages.push({ index, message });
    index++;
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
