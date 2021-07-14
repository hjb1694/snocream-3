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

app.use('*', (req,res) => {
    res.redirect('/');
});


app.listen(3001, () => console.log('Listening on port 3001!'));