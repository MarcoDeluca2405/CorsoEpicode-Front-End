import 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Icon from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar= ()=> 

<Navbar  id="sidebar" collapseOnSelect expand="md" bg="dark" variant="dark" className='p-0'>
  <Navbar.Brand to="/home" className='mx-2' ><img src='https://www.pngall.com/wp-content/uploads/4/Netflix-Official-Logo.png'  alt="Logo Netflix" className='Netflix' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='MyNav'>
    <Nav className="mx-3 d-flex justify-content-around navMyLink">
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/TV">Tv Shows</NavLink>
      <NavLink to="/Movies">Movies</NavLink>
      <NavLink to="/REcent">Recently Added</NavLink>
      <NavLink to="/List">My List</NavLink>
    </Nav>

    <Nav className='me-4 d-flex align-items-center'>
      <Nav.Link href="#serch"> <Icon.Search /> </Nav.Link>
      <Nav.Link href="#Kids"> Kids </Nav.Link>
      <Nav.Link href="#bel"> <Icon.Bell /> </Nav.Link>
    
      <Dropdown>
      <Dropdown.Toggle variant='dark' id="dropdown-basic" className='w-100'>
        <img src='http://sman1kalitidu.sch.id/storage/sman1kalitidu.sch.id/editor/hGLTGY2y8UgYJWFZOcaWS23HDdeqwR8cN8flRQ1S.png' alt="MyProfile" className='MyProfile' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Option</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Exit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </Nav>
    </Nav>
  </Navbar.Collapse>

</Navbar>

export default NavBar;

