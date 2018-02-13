import {GET_DISTANCE} from '../actions/types';
export default function(state = [], action){
    switch(action.type){
        case GET_DISTANCE:
        return action.payload || false;
         default:
        return state;
    }
}