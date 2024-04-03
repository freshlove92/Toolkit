import {combineReducers} from 'redux'
import autheticateReducer from './autheticateReducer'
import productReducer from './productReducer'

export default combineReducers({
    auth: autheticateReducer,
    product: productReducer,
})