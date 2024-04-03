let initialState={
    id:"",
    password: '',
    authenticate: false,

}

function autheticateReducer(state=initialState, action){

    switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload, // id, password, authenticate: true
        authenticate: true,
      };
    case "LOGOUT":
      return {
        ...state,
        id: "",
        password: "",
        authenticate: false,
      };
    default:
      return { ...state };
  }
}


export default autheticateReducer