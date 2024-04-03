import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({authenticate, setAuthenticate}) => {
    
    
    const menubar = ['회원전용ZONE','EDITION','BEST', 'LIP','EYE', 'FACE','SET', 'ALL']
    const navigator = useNavigate()

    const gotoLogin =()=>{
        navigator('/login')
        // setAuthenticate(true);
    }


    const goToLogout = () => {
          if (window.confirm('로그아웃 하시겠습니까?')) {
            // setAuthenticate(false);
            navigator('/');
        }
    };

    console.log('네비바에서 상태',authenticate)
   

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const search =(event)=>{
        if (event.key === "Enter"){
            let keyword = event.target.value
            navigator (`/?q=${keyword}`)
           
        }
    }
    
    const clickSearch =(event)=>{
         let keyword = event.target.value
            navigator (`/?q=${keyword}`)
    }

    const logo =()=>{
        navigator('/')
    }

    return (
        <div>

            <div className="menu-button" onClick={toggleMenu}><FontAwesomeIcon size="lg" icon={faBars} /></div>

            <div className='login' onClick={authenticate ? goToLogout : gotoLogin}>
        
            <FontAwesomeIcon icon={faCircleUser} />
            {/* 기존 Link태그 보다 선택,변경시엔 다른걸 쓰는게 낫다고 함 (조건부 렌더링?)  */}
            <span className='margin'>{authenticate ? "로그아웃" : "로그인"}</span>
             </div>

            <div className='logo' onClick={logo}>
                <img width={150} src='https://image.brandi.me/seller/mphankang_profile_1546504272.jpg' />
            </div>

            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>

                {isMenuOpen && (
                        <div className="close-button" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>
                    )}

                <div className='menubar'>
                    {menubar.map((menu, index) => (<li key={index}>{menu}</li>))}
                </div>
                <div className='searchbox'>
                    <input className='input' type='text' onKeyPress={(event) => search(event)} onClick={clickSearch} ></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;