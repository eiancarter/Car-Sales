import { combineReducers } from 'redux';
import { purchaseReducer } from './purchaseReducer';
import { removeReducer } from './removeReducer';

export default combineReducers({
    purchaseReducer,
    removeReducer
});
