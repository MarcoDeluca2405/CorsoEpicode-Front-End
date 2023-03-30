import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MynewNav = () =>

<Navbar bg="dark" variant='dark'  expand="lg">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Admin</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>


export default MynewNav;