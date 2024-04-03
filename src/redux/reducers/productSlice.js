import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkApi,id)=>{
        try{

        let url = `https://my-json-server.typicode.com/freshlove92/RedLip/products?q=${searchQuery}`
        let response = await fetch(url)
        return await response.json()

        }catch(error){
            
            thunkApi.rejectWithValue(error.message)

        } 
})

export const fetchProductDetail = createAsyncThunk('product/fetchDetail', async (productId, thunkApi) => {
        try {

          let url = `https://my-json-server.typicode.com/freshlove92/RedLip/products/${productId}`;
          let response = await fetch(url);
          return await response.json();
        
        } catch (error) {
        
          return thunkApi.rejectWithValue(error.message);
        
        }
});
            

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // getProductSuccess(state, action) {
    //   state.productList = action.payload.data;
    // },
   
    getProductDetail(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.isLoading = false
        state.productList = action.payload;
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
        state.isLoading=false
        state.error=action.payload;
    })


    .addCase(fetchProductDetail.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedItem = action.payload;
    })
    .addCase(fetchProductDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  }
});


export const productToolkitAction = productSlice.actions
export default productSlice.reducer;