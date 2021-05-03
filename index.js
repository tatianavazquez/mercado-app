const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
//var path = ['/tati']

var products;

app.use(cors());

//app.use(express.static(path.join(__dirname, 'build')));
/*app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });*/

app.get('/api/search', async (req, res, next) => {
    let { query } = req.query;
    var obj = {
        id: "",
        title: "",
        price: 0,
        currency_id: "",
        available_quantity: 0,
        thumbnail: "",
        condition: ""
    }
    await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then(
    response =>response.data.results
    ).then(prods => products = prods)
    .then(products)

   let myProducts = products.map(el => 
        obj = {
            id: el.id,
            title: el.title,
            price: el.price, 
            currency_id: el.currency_id,
            available_quantity: el.available_quantity,
            thumbnail: el.thumbnail,
            condition: el.condition
        })
    
    res.json(myProducts)
});

/*app.get(`/api/products`, (req, res, next) => {
    console.log(req.params)
    res.json('Hola')
})*/

app.listen(3001, () => console.log('Estoy aca!'));

module.exports = app;