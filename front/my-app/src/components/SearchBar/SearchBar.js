import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles.js';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/actions.js';
import PropTypes from 'prop-types';

const SearchBar = ({ getProducts, products, history }) => {

    const classes = useStyles();
    const [ keyword, setKeyword ] = useState('');
    const [ myProducts, setMyProducts ] = useState();
   
    
    useEffect(() => console.log(myProducts), [])

 const handleChange = (e) => {
        setKeyword(e.target.value);
    }

 const handleClick = (event) => {
        event.preventDefault();
       getProducts(keyword).then( ()=> history.push('/catalogo'))          
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    MercadoLibre
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Buscar..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps= {{ 'aria-label': 'buscar'}}
                        name="keyword"
                        value={keyword}
                        onChange={handleChange}
                        />
                                                
                </div>
                <div onClick={handleClick}>
                    <Button > Ir </Button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

SearchBar.propTypes = {
    products: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        products: state.reducer.products
    }
}

const mapDispatchToProps = {
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);