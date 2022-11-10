import { useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand style={{color:"black", fontSize:"1.5rem", textDecoration:"none",fontWeight:"600"}}>Navbar</Navbar.Brand>
          <Link to="/" style={{color:"black", fontSize:"1.5rem", textDecoration:"none",fontWeight:"600"}} >Store</Link>
          <Link to="/card" style={{color:"black", fontSize:"1.5rem", textDecoration:"none",fontWeight:"600"}}>Sepet</Link>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;