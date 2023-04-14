import  next from  "../playerbuttons/Next.png"
import  shuffle from  "../playerbuttons/Shuffle.png"
import  previous from  "../playerbuttons/Previous.png"
import  repeat from  "../playerbuttons/Repeat.png"
import  play from  "../playerbuttons/Play.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container, Row } from "react-bootstrap"


const NavBarFlex= ()=>{

return(

    <Container fluid className="fixed-bottom bg-container pt-1">
    <Row>
      <Col lg="10" className="offset-lg-2">
        <Row>
          <Col sx="6" md="4" lg="2" className=" offset-md-4 offset-lg-5 playerControls mt-1">
            
              <a href="#" className="me-3">
                <img src={shuffle}alt="shuffle" />
              </a>
              <a href="#" className="me-3">
                <img src={previous} alt="shuffle" />
              </a>
              <a href="#">
                <img src={play} alt="shuffle" />
              </a>
              <a href="#" className="ms-3">
                <img src={next} alt="shuffle" />
              </a>
              <a href="#" className="ms-3">
                <img src={repeat} alt="shuffle" />
              </a>
            
          </Col>
        </Row>
        <div className="row justify-content-center playBar py-3">
          <div className="col-8 col-md-6">
             <ProgressBar animated variant="success" now={45}/>
          </div>
        </div>
      </Col>
    </Row>
  </Container>

)

}

export default NavBarFlex