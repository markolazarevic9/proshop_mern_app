import { Nav, Container, Navbar, NavDropdown} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate();
  
  return (
    <div className="Header">
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
              <Navbar.Brand style={{cursor:'pointer'}} onClick={() => navigate('/')}>Proshop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  style={{cursor:'pointer'}}
                  onClick={() => navigate('/cart')}>
                    <i className='fas fa-shopping-cart'></i> Cart
                 </Nav.Link>
                <Nav.Link 
                  style={{cursor:'pointer'}}
                  onClick={() => navigate('/signin')}>
                    <i className='fas fa-user'></i> Sign in
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>  
        </Navbar>
    </div>
  )
}

