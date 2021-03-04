import * as types from '../actions/actionTypes.js';

const initialState = {
    products: [],
    conditionNew: []
}

export default function Reducer (state = initialState, action) {
    switch(action.type) {
        /*case "MESSAGE":
            return [...state, action.message];*/
        case types.GET_PRODUCTS:
            return {...state, 
                products: action.products, 
                conditionNew: action.products.filter(el => el.condition === 'new'),
                conditionUsed: action.products.filter(el => el.condition === 'used')
            }
        default:
            return state;
    }
}