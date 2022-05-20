import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useNavigate } from 'react-router-dom'

export default function Product({ product }) {
    const navigate = useNavigate();

  return (
   <Card className='my-3 p-3 rounded'>
       <a onClick={() => navigate(`/product/${product._id}`)}>
            <Card.Img src={product.image} variant='top' />
       </a>

       <Card.Body>
            <a onClick={() => navigate(`/product/${product._id}`)}>
                    <Card.Title as='div'>
                        <strong> {product.name}</strong>
                    </Card.Title>
            </a>
            <Card.Text as='div'>
                <Rating 
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                />
            </Card.Text>

            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
       </Card.Body>
   </Card>
  )
}
