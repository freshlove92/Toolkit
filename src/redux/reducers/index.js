import {combineReducers} from 'redux'
import autheticateReducer from './autheticateReducer'
import productSlice from './productSlice'

export default combineReducers({
    auth: autheticateReducer,
    product: productSlice,
})