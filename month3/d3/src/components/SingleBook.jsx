import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import CommentArea from './CommentArea';
import AddComment from './AddComment';
import Button from 'react-bootstrap/Button';



class SingleBook extends Component {


state={

    selected:false,
    selectedBook: "",
    selectedButton:false,

}

render(){

return(

<Container className='d-flex justify-content-center'  onMouseLeave={()=>{this.setState({selected:false, selectedButton:false})}}>
    <Row className='mt-4'>
        <Col className='justify-content-center'>
<Card key={this.props.key} style={{ width: '18rem' }}  onClick={()=>{this.setState({ selected:true ,selectedBook:this.props.libri.asin})}} className={this.state.selected&&("bg-danger")}>

<Card.Img variant="top" src={this.props.libri.img} />
<Card.Body>
  <Card.Title>{this.props.libri.title}</Card.Title>
  <Card.Text>
    {this.props.libri.category}
  </Card.Text>
  <Card.Footer>
    {this.props.libri.price}$
  </Card.Footer>
  <Card.Footer>
    {this.state.selected&&(
      <>
      <Button bg='dark' onClick={()=>{this.setState({selectedButton:true })}}>Add Comments</Button>
      {this.state.selectedButton&& (<AddComment selectedBook={this.state.selectedBook} /> )    
        
      }
      
      
      {!this.state.selectedButton&&(
        <CommentArea selectedBook={this.state.selectedBook}/>
      )}

       </>
    )}
  </Card.Footer>
</Card.Body>
</Card>



</Col>
</Row>
</Container>


)

}

}

export default SingleBook;