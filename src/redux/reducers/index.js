import {combineReducers} from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import reviewReducer from './reviewReducer';
import productWithin from './productWithin';
import coordsReducer from './coordsReducer';

export default combineReducers({
    auth: authReducer,
    stores: storeReducer,
    products: productReducer,
    categories: categoryReducer,
    reviews: reviewReducer,
    geoProducts: productWithin,
    coords: coordsReducer
});