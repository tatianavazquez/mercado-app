import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Catalogo.css';
import Paginacion from '../Pagination/Paginacion.js';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

const CatalogoUsed = ({ conditionUsed }) => {

    const [productsXPage, setProductsXPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => setLoading(false), [conditionUsed]);

    var indexOfLastProduct = currentPage * productsXPage;
    var indexOfFirstProduct = indexOfLastProduct - productsXPage
    var currentProducts = conditionUsed.slice(indexOfFirstProduct, indexOfLastProduct)

    function Alert(props) {
        return <MuiAlert elevation={10}  {...props}/>
    }

    return (
        <div>
        { loading === true ?
            <h1> Cargando... </h1>
            : 
        <div>
            <Link to="/catalogo">
            <span title="Ir al catalogo completo">
            <div className="catalogoFilterIcon">
            <FirstPageIcon  style={{ fontSize: 40}}  />
            </div>
            </span>
            </Link>
            <h1> Productos usados</h1>
            <div>
            {currentProducts.length < 1 ?
                <Alert severity="warning">
                No existen productos con esa condición.
            </Alert> :
            <div>
                <Paginacion
                productsXPage={productsXPage} 
                products={conditionUsed}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />

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
        }
         </div>
        </div>
        }
        </div>
    )
}

CatalogoUsed.propTypes = {
    conditionUSed: PropTypes.array.isRequired,
}

function mapStateToProps (state){
    return {
        conditionUsed: state.reducer.conditionUsed,
    }
}

export default connect(mapStateToProps)(CatalogoUsed);