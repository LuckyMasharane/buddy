import {FETCH_USER, SET_USER} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_USER:
        return action.payload;
        case SET_USER: 
        return action.payload
         default:
        return state;
    }
}