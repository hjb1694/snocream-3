const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/menu', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'menu.html'));
});


app.listen(8000, () => console.log('Listening on port 8000!'));