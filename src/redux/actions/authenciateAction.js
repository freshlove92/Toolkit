import { authToolkitAction } from "../reducers/autheticateReducer"

function login (id,password){
    return (dispatch, getstate)=>{
        // console.log("login success action")
        // dispatch({type:"LOGIN_SUCCESS", payload:{id, password}})
        dispatch(authToolkitAction.loginSuccess({id, password}))
    };

}

export const authenciateAction={login}