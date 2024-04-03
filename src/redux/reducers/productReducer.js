let initialState = {
    productList:[],
    selectedItem: null
}

function productReducer(state=initialState, action){
    
    switch(action.type){
        case "GET_PRODUCT_SUCCESSS" :
            return{...state,
                productList: action.payload.data
                }
        case "GET_PRODUCT_DETAIL" :
            return{
                ...state,
                selectedItem: action.payload.data

            }
        default:
            return{...state}
    }

}

export default productReducer;