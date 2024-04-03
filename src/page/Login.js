import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenciateAction } from '../redux/actions/authenciateAction';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser =(event)=>{
        event.preventDefault();
        dispatch(authenciateAction.login(id,password))
        setAuthenticate(true);
        navigate("/")
        }

    const [id,setId] = useState('')
    const [password, setPassword]=useState('');

    return (       

        <form className='loginComponent' onSubmit={(event)=>loginUser(event)}>
            <h1>Login</h1>
            <hr/>
            <input className='inputID' type='text' onChange={(event)=>setId(event.target.value)} placeholder='아이디를 입력해 주세요.'></input>
            <input className='inputPW' type='text' onChange={(event)=>setPassword(event.target.value)} placeholder='비밀번호 입력해 주세요' ></input>
            <button className='loginBtn' type='submit'>로그인</button>
            <p className='searchIDPW'>아이디찾기 ㅣ 비밀번호찾기</p>
        </form>
    );
};

export default Login;