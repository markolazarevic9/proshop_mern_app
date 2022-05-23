import React from 'react'
import { useState, useEffect } from 'react'
// import products from '../products.js'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Layout from '../components/Layout.js'
import axios from 'axios'

export default function HomeScreen() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()

  }, [])

  return (

    <Layout>
        <h1 style={{padding:'20px'}}>Latest Products</h1>
        <Row>
            {products.map(product  => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </Layout>
  )
}

