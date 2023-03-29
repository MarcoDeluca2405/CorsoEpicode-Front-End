import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Books from '../books/fantasy.json';
import React, { useState } from "react";

class AllTheBooks extends Component {
     


render(){
 
    return(
        <div className="container-fluid m-0 my-3">
        <Row className="justify-content-center ">
           
         
                {Books.map((book)=>{

                    return(
                        <Col className="Mybook my-3" xs={12} xm={6} xl={3}>

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