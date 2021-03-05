import React, {useState} from 'react';
import ProductCard from '../ProductCard/ProductCard.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Catalogo.css';
import Paginacion from '../Pagination/Paginacion.js';

const CatalogoNew = ({ conditionNew }) => {

    const [productsXPage, setProductsXPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);

    var indexOfLastProduct = currentPage * productsXPage;
    var indexOfFirstProduct = indexOfLastProduct - productsXPage
    var currentProducts = conditionNew.slice(indexOfFirstProduct, indexOfLastProduct)

    return (
        <div>
            <Paginacion
                 productsXPage={productsXPage} 
                 products={conditionNew}
                 currentPage={currentPage}
                 setCurrentPage={setCurrentPage} />
            <h1> Productos nuevos</h1>
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

CatalogoNew.propTypes = {
    conditionNew: PropTypes.array.isRequired,
}

function mapStateToProps (state){
    return {
        conditionNew: state.reducer.conditionNew,
    }
}

export default connect(mapStateToProps)(CatalogoNew);