import { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux"
import { fetchProductDetail } from '../redux/reducers/productSlice';

const DetailProduct = () => {

    let {id} = useParams()
    const [isOpen, setIsOpen] = useState(false);
    const product = useSelector((state) => state.product.selectedItem);
    const dispatch = useDispatch();

    // const product = useSelector((state)=>state.product.selectedItem)
    // console.log("디테일 페이지 프로덕트?",product)
    // const [ product, setProduct ] = useState(null)

    const getProductDetail=()=>{
            dispatch(fetchProductDetail(id));
        };

    useEffect(()=>{
        getProductDetail()

    },[])

     const toggleDropdown = () => {
    setIsOpen(!isOpen); // 현재 상태의 반대값으로 설정
    };

    return (
        <Container className='Container'> 
            <Row className='Row'>
                <Col className='detailimg'>
                    <img src={product?.img}></img>
                </Col>
                <Col className='Col'>
                <div className='detailBox'>
                    <div className='detai-title' >{product?.title}</div>
                     <div>
                     <span className='card-sale'>{product?.sale}</span>
                     <span >{product?.price}</span>
                     <span className='card-smallprice'>{product?.smallprice}</span>
                     <div></div>
                     <div >{product?.choice && <span className='mdpic'>MD's pick!</span>}</div>
                     <div >{product?.new && <span className='card-new'>NEW!</span>}</div>
                     </div>
                     
                     <div className='justText'>
                     <div>적립금　　5%</div>
                     <div>브랜드　　릴리바이레드 </div>
                     <div>배송비　　2,500원(15,000원 이상 구매 시 무료) </div>
                     </div>
                    
                    <div className='btnBox'>
                     <div class="dropdown">
                        <button class="dropbtn" onClick={toggleDropdown}>옵션선택 ▼</button>
                        {isOpen && (
                            <div className="dropdown-content">
                            <a href="#">{product?.color[0]}</a>
                            <a href="#">{product?.color[1]}</a>
                            <a href="#">{product?.color[2]}</a>
                            </div>
                        )}
                        <div>
                        <button className='bagu'>바로구매하기</button>
                        </div>
                        </div>
                    </div>    
                    </div>
                </Col>
            </Row>           
        </Container>
    );
};

export default DetailProduct;