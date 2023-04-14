import  next from  "../playerbuttons/Next.png"
import  shuffle from  "../playerbuttons/Shuffle.png"
import  previous from  "../playerbuttons/Previous.png"
import  repeat from  "../playerbuttons/Repeat.png"
import  play from  "../playerbuttons/Play.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux"


const NavBarFlex= ()=>{

const cardArtist=useSelector((state)=>state.albumList.selectedTrack)

return(

    <Container fluid className="fixed-bottom bg-container pt-1">
    <Row>
    
      <Col lg="10"  className="offset-lg-2 ofs">
        <Row>
        <Col sx="3" md="1" lg="1" className=" offset-md-1 offset-lg-0 playerControls mt-1">
        <Card style={{ width: '4rem' }} className="d-flex">
      <Card.Img variant="top" src={cardArtist?.track?.album?.cover_small} />
    </Card>
          </Col>

          <Col sx="4" md="2" lg="2" className="mt-1 d-flex text-light">
            {cardArtist?.track?.title}
          </Col>


          <Col sx="8" md="3" lg="4" className=" offset-md-1 offset-lg-1 playerControls p-0">
            
        
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
        <div className="row justify-content-center playBar py-0 container offset-md-1 offset-lg-0">
          <div className="col-8 col-md-6 ">
             <ProgressBar animated variant="success" now={45}/>
          </div>
        </div>
      </Col>
    </Row>
  </Container>

)

}

export default NavBarFlex