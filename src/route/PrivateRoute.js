import React from 'react';
// import ProductAll from '../page//ProductAll';
import { Navigate } from 'react-router-dom';
import DetailProduct from '../page/DetailProduct';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const authenticate = useSelector(state=>state.auth.authenticate)
    console.log("PrivateRoute의 상태",authenticate)
    
    return authenticate ? <DetailProduct/> : 
    <Navigate to='/login'/>
        
    
};

export default PrivateRoute;