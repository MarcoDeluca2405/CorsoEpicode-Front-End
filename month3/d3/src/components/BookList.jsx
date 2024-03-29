import { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import SingleBook from './SingleBook';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

class BookList extends Component{


 state= {
    search:{
        bookSearch:""
    }
 }

    render(){
      
        return(

            <Container>

<InputGroup size="md" className="mb-3 mt-4">
        <InputGroup.Text id="inputGroup-sizing-sm">Search Title</InputGroup.Text>
        <Form.Control
        className='bg-dark bg-gradient text-light'
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={this.state.bookSearch}
          onChange={(e)=>{
            this.setState({
                search:{
                    bookSearch:e.target.value
                }
            })
          }}
        
        />
      </InputGroup>

           <Row>
      {this.props.libri.filter(el=>el.title.toLowerCase().includes(this.state.search.bookSearch.toLocaleLowerCase())).map(book=>{

return (
    <Col>
<SingleBook key={book.asin} libri={book}></SingleBook>
</Col>
)

})}
</Row>

            </Container>


        )
     
    


      
          


        }


}


export default BookList;