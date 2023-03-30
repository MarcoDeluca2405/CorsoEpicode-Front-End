import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const SingleBook =(props) =>

<Container className='d-flex justify-content-center'>
    <Row className='mt-4'>
        <Col className='justify-content-center'>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={props.img} />
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>
    {props.category}
  </Card.Text>
  <Card.Footer>
    {props.price}$
  </Card.Footer>
</Card.Body>
</Card>
</Col>
</Row>
</Container>

export default SingleBook;