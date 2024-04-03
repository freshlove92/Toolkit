// import { createStore,applyMiddleware } from "redux";
// import { thunk } from 'redux-thunk'
// import rootReducer from "./reducers"
// import { composeWithDevTools } from "@redux-devtools/extension";


// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; 
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
 
});

export default store;