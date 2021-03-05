import React, { useState, useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import './Catalogo.css';
import Paginacion from '../Pagination/Paginacion.js';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Catalogo = ({products}) => {

    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [productsXPage, setProductsXPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl1, setAnchorEl1] = useState(null)

    var indexOfLastProduct = currentPage * productsXPage;
    var indexOfFirstProduct = indexOfLastProduct - productsXPage
    var currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    }

    const handleClose1 = () => {
        setAnchorEl1(null)
    }

    const getNew = () => {
        history.push('/catalogoNew')
    };

    const getUsed = () => {
        history.push('/catalogoUsed')
    }
    
    const getLow = () => {
        products.sort(function(a, b) {
            if ( a.price < b.price) {
                return -1;
            } else if (a.price == b.price) {
                return 0;
            } else {
                return 1;
            }
          })
          setAnchorEl(null)
    }
   
    const getHigh = () => {
        products.sort(function(a, b) {
            if ( a.price > b.price) {
                return -1;
            } else if (a.price == b.price) {
                return 0;
            } else {
                return 1;
            }
      })
          setAnchorEl1(null)
    }

    return (
        <div>
         <Paginacion
                 productsXPage={productsXPage} 
                 products={products}
                 currentPage={currentPage}
                 setCurrentPage={setCurrentPage} />
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                Filtrar por condición:
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
              <MenuItem onClick={getNew} > Sin uso </MenuItem>
              <MenuItem onClick={getUsed}> Usado </MenuItem>
            </Menu>
        </div>

        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1} >
               Ordenar por precio:
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
                >
              <MenuItem onClick={getLow} > Menor </MenuItem>
              <MenuItem onClick={getHigh}> Mayor </MenuItem>
            </Menu>
        </div>

        <div className="grid">
             
            {currentProducts.map(el => 
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
    products: PropTypes.array.isRequired,
    conditionNew: PropTypes.array.isRequired,
    conditionUsed: PropTypes.array.isRequired
}

function mapStateToProps (state){
    return {
        products: state.reducer.products,
        conditionNew: state.reducer.conditionNew,
        conditionUsed: state.reducer.conditionUsed
    }
}

export default connect(mapStateToProps)(Catalogo);