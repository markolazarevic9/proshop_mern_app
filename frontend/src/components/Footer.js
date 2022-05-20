import { Container, Row, Col } from 'react-bootstrap'


export default function Footer () {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; ProShop
                    </Col>
                </Row>
            </Container>
        </div>
    )
}