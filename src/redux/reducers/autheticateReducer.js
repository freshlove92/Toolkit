import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  id: "",
  password: "",
  authenticate: false,
};

// createSlice를 사용하여 슬라이스 생성
const authSlice = createSlice({
  name: 'auth', // 슬라이스의 이름
  initialState,
  reducers: {
    
    loginSuccess(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },
    
    logout(state) {
      state.id = "";
      state.password = "";
      state.authenticate = false;
    },
  },
});

// export const { loginSuccess, logout } = authSlice.actions;
export const authToolkitAction = authSlice.actions
export default authSlice.reducer;