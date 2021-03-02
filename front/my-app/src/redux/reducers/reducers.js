import * as types from '../actions/actionTypes.js';

const initialState = {
    products: []
}

export default function Reducer (state = initialState, action) {
    switch(action.type) {
        /*case "MESSAGE":
            return [...state, action.message];*/
        case types.GET_PRODUCTS:
            return {...state, products: action.products};
        default:
            return state;
    }
}