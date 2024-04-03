
function getProduct(searchQuery){
    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/freshlove92/RedLip/products?q=${searchQuery}`
        // console.log("쿼리값은?",searchQuery)

        let response = await fetch(url)
        let data = await response.json()
        // console.log(data)
        // setProductList(data);

        dispatch({type:"GET_PRODUCT_SUCCESSS", payload: {data}})
    }
}

function getProductDetail(id){
    return async(dispatch)=>{
       let url = `https://my-json-server.typicode.com/freshlove92/RedLip/products/${id}`
       let response = await fetch(url);
       let data = await response.json(); 
        // setProduct(data)

       dispatch({type:"GET_PRODUCT_DETAIL", payload: {data}})
    }

}

export const productAction = {getProduct,getProductDetail}