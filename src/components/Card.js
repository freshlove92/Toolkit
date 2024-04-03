import React from 'react';
import { useNavigate } from 'react-router-dom';


const Card = ({ item }) => {
    // console.log(item)
    const navigator = useNavigate();

    const showDetail =(event)=>{
        
        navigator(`/product/${item.id}`)
        // console.log("showDetail",showDetail)
    }


    return (

        <div className='cardItem' onClick={showDetail}>
            <img className='cardImg' width={300} src={item?.img} ></img>
            
            <div className='textBox'>

                <div className='smallTextBox'>
                   <div className='smallTextBox'>
                        {item?.choice && <span className='mdpic'>MD's pick!</span>}
                        {item?.choice && item?.new && <span> </span>} {/* 조건이 모두 참일 때만 공백을 추가 */}
                        {item?.new && <span className='card-new'>NEW!</span>}

                        <span className='card-new'>{!item?.new ? "　" : ""}</span>
                        {/* 줄 맞추고 싶어서 넣은 구문인데 다른방법은 없을까? */}
                    </div>
                </div>
                
                <div className='card-title'>{item?.title}</div>
                
                <div className='price-meun'>
                <span className='card-sale'>{item?.sale}</span>
                <span className='card-price'>{item?.price}</span>
                <span className='card-smallprice'>{item?.smallprice}</span>
                </div>

            </div>
        </div>
    );
};

export default Card;