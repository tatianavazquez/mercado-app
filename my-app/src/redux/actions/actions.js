import axios from "axios";
import * as types from './actionTypes.js';


export function getProducts(keyword) {
    return async function (dispatch) {
        return await axios({
        method: 'GET',
        url: `http://localhost:3001/api/search?query=${keyword}`
    }).then(response => 
        dispatch({
            type: types.GET_PRODUCTS,
            products: response.data
        })
    )
}
}
