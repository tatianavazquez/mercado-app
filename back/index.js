var express = require('express');
var app = express();

app.get('/', (req, res, next) => {
    res.send('Hola!!')
})

app.listen(3001, () => console.log('Estoy aca!'));

module.exports = app;