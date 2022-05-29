import Layout from "../components/Layout";
import Message from "../components/Message"
import Loader from "../components/Loader"
import { useState, useEffect } from "react";
import { useParams, useNavigate, matchPath } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import { listProductDetails } from "../actions/productActions";

export default function ProductScreen(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams()

    const productDetails = useSelector(state => state.productDetails)

    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch])

    return (
        
        <Layout>
            <a className="btn btn-light my-3" onClick={() => navigate('/')}>Go back</a>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                 <Row>
                 <Col md={6}>
                     <Image
                          src={product.image}
                          alt={product.name}
                         fluid
                      />
                 </Col>
                 <Col md={3}>
                     <ListGroup variant='flush'>
                         <ListGroup.Item>
                             <h3>{product.name}</h3>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Rating 
                                 value={product.rating} 
                                 text={`${product.numReviews} reviews`}
                             />
                         </ListGroup.Item>
                         <ListGroup.Item>
                             Price : ${product.price}
                         </ListGroup.Item>
                         <ListGroup.Item>
                             Description : ${product.description}
                         </ListGroup.Item>
                     </ListGroup>
                 </Col>
                 <Col md={3}>
                     <Card>
                         <ListGroup variant='flush'>
                             <ListGroup.Item>
                                 <Row>
                                     <Col>
                                         Price:
                                     </Col>
                                     <Col>
                                         <strong>{product.price}</strong>
                                     </Col>
                                 </Row>
                             </ListGroup.Item>
                             <ListGroup.Item>
                                 <Row>
                                     <Col>
                                         Status:
                                     </Col>
                                     <Col>
                                         {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                     </Col>
                                 </Row>
                             </ListGroup.Item>
                             <ListGroup.Item>
                                 <Row>
                                     <Button className="btn-block" type='button' disabled={product.countInStock === 0}>
                                         Add to cart
                                     </Button>
                                 </Row>
                               
                            </ListGroup.Item>
                         </ListGroup>
                     </Card>
                 </Col>
             </Row>
            )}
           
        </Layout>
    )
}