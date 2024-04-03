import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import ProductAll from './page/ProductAll';
import Login from './page/Login'
// import DetailProduct from './page/DetailProduct';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useSelector, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {

  // const [login,setLogin] = useState(true)  

  //  const PrivateRoute=()=>{
  //   return login === true? <Userpage /> : <Navigate to="/login"/>
  // }
  // const authenticate = useSelector(state => state.authReducer.authenticate);
  const [authenticate,setAuthenticate]=useState(false) //true는 로그인
  // const navigator = useNavigate()

  console.log("앱에서 상태", authenticate)
  
  // useEffect(()=>{
  //   // console.log("authenticate",authenticate)
  //   navigator('/')  
  // },[authenticate])


  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
          <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
          <Route path='/product/:id' element={<PrivateRoute />} />
          <Route path='/' element={<ProductAll />} />
      </Routes>
    </>
  );
}

export default App;
