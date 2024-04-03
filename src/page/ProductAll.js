import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom';
// import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector} from "react-redux"
import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {

    const productList = useSelector((state)=>state.product.productList);
    const [query,setQuery] = useSearchParams();
    const dispatch = useDispatch()

    const getProduct =()=>{
        let searchQuery = query.get("q") || "";
        // dispatch(productAction.getProduct(searchQuery))
        dispatch(fetchProducts(searchQuery))
    }
    
    useEffect(()=>{
        getProduct()
    },[query])

    return (
        <div className='item'>
            <Container>
                <Row>
                    {productList.map((item)=>(
                    <Col xs={6} lg={3}><Card item={item}/></Col>
                    ))}
                </Row>   
            </Container>
            {/* <Card /> */}
            {/* <a href="#" className="page-top">↑</a> */}
        </div>
    );
};

export default ProductAll;

