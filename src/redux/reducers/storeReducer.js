import {FETCH_STORE} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_STORE:
        return action.payload || false;
         default:
        return state;
    }
}