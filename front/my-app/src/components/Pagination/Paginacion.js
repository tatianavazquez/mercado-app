import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const Paginacion = ({ productsXPage, products, currentPage, setCurrentPage}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    }));

    const classes = useStyles();
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(products.length / productsXPage); i++){
        pageNumbers.push(i);
    }
    
    const handleChange = (event, value) => {
        setCurrentPage(value);
        return currentPage
    }

    return (
        <div className={classes.root}>
             <Pagination count={pageNumbers.length} page={currentPage} onChange={handleChange} /> 
        </div>
    )
}

export default Paginacion;