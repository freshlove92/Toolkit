
function getProductDetail(id){
    return async(dispatch, getState)=>{
       let url = `https://my-json-server.typicode.com/freshlove92/RedLip/products/${id}`
       let response = await fetch(url);
       let data = await response.json(); 
        // setProduct(data)

       dispatch({type:"GET_PRODUCT_DETAIL", payload: {data}})
    }

}

export const detailProductAction = {getProductDetail}