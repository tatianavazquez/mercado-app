import React, { useState, useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Catalogo.css';
import Button from '@material-ui/core/Button';

const Catalogo = ({products}) => {
  
    return (
        <div>
             <Button> Anterior </Button>
             <Button> Siguiente </Button>
        <div className="grid">   
            {products.map(el => 
                <ProductCard className="card" 
                    thumbnail={el.thumbnail}
                    title={el.title}
                    currency_id={el.currency_id}
                    price={el.price}
                    condition={el.condition}
                    available_quantity={el.available_quantity}/>)}          
        </div>
        </div>
    )
}

Catalogo.propTypes = {
    products: PropTypes.array.isRequired
}

function mapStateToProps (state){
    return {
        products: state.reducer.products
    }
}

export default connect(mapStateToProps)(Catalogo);