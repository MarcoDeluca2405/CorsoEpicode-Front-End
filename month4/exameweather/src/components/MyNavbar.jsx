import { Nav, Navbar,Container } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

const MyNavbar =() =>{

    return(

        <Navbar bg="light" expand="lg" className="py-0">
        <Container fluid className="myCoverBanner">
          <Navbar.Brand><Link to="/"><img className="myImg" src="https://cdn.pixabay.com/photo/2014/04/03/00/39/sun-308967_960_720.png" alt="sun" />MyWeather</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-around myNavLink">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/Favorite">Favorite</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )


}

export default MyNavbar