import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavBar = ()=>{

    return(

        <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">FlightSpace</Navbar.Brand>
        </Container>
      </Navbar>

    )

}

export default MyNavBar