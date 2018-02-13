import {FETCH_PRODUCT_WITHIN} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_PRODUCT_WITHIN:
        return action.payload || false;
         default:
        return state;
    }
}