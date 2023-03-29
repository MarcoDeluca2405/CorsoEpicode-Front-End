import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNav= ()=>

<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">MyNav</Navbar.Brand>
  <Nav className="ms-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#About">About</Nav.Link>
    <Nav.Link href="#Browse">Browse</Nav.Link>
  </Nav>
</Container>
</Navbar>


export default MyNav;