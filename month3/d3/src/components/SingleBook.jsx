import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';



const SingleBook =(props) =>

<Container className='d-flex justify-content-center'>
    <Row className='mt-4'>
        <Col className='justify-content-center'>
<Card key={props.key} style={{ width: '18rem' }}>
<Card.Img variant="top" src={props.libri.img} />
<Card.Body>
  <Card.Title>{props.libri.title}</Card.Title>
  <Card.Text>
    {props.libri.category}
  </Card.Text>
  <Card.Footer>
    {props.libri.price}$
  </Card.Footer>
</Card.Body>
</Card>
</Col>
</Row>
</Container>

export default SingleBook;