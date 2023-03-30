
import { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Books from '../books/fantasy.json'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class BookList extends Component{

    state = {

        titleBook:"",

    }
    
    

    render(){

        return(

       

            <Container className='mt-4 w-50'>

                     <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search Title</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={this.state.titleBook}
              onChange={(e)=>{
                this.setState({
                    titleBook:e.target.value
                })
              }}
              
            />
          </InputGroup>


            <ListGroup>
             {Books.map(books=>{
                return(

                    <ListGroup.Item key={books.asin}>{books.title}</ListGroup.Item>

                );

             })}   
        
            </ListGroup>
            </Container>
        )

    }
}

export default BookList;