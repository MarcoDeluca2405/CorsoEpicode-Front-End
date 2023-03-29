import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Fantasy from '../books/fantasy.json';
import History from '../books/history.json';
import Horror from '../books/horror.json';
import Romance from '../books/romance.json';
import Scifi from '../books/scifi.json';
import Dropdown from "react-bootstrap/Dropdown";
class AllTheBooks extends Component {
     
     ArrayBooks= [Fantasy,History,Horror,Romance,Scifi];

    state= {
        selectGender:null,
    }


render(){
 
    return(
        <div className="container-fluid m-0 my-3">



    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Seleziona Genere
      </Dropdown.Toggle>

      <Dropdown.Menu>

        {this.ArrayBooks.map((Gender,index)=>{
            console.log(Gender[index].category)
            return( 
                
            <Dropdown.Item onClick={()=>{
                this.setState({selectGender:Gender})
            }} >{Gender[index].category}</Dropdown.Item> 
            )
        })}
        
       
      </Dropdown.Menu>
    </Dropdown>



        <Row className="justify-content-center ">
           
         
              {this.state.selectGender?.map((book)=>{

                    return(
                        <Col className="Mybook my-3" xs={6} xm={4} xl={3}>

   <Card className="h-100 w-100 position-relative" key={book.asin}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
            {book.category}
        </Card.Text>
        <Card.Footer>
            {book.price}€
        </Card.Footer>
      </Card.Body>
    </Card>


                          </Col>
                    );


                })}
            
            
            </Row>  
        </div>
    );
    
}

}


export default AllTheBooks;