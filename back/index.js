const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


var products;

app.use(cors());

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
    
})

app.listen(3001, () => console.log('Estoy aca!'));

module.exports = app;