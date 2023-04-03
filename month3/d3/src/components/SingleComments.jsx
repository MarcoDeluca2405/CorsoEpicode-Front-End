import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import Delete from './Delete';
import { Container } from 'react-bootstrap';



const SingleComments= (props)=>

<Container className='d-flex'>
<OverlayTrigger trigger="click" placement="right" overlay={
<Popover id="popover-basic" className='bg-dark'>

<Popover.Body>
   
     
    <Card className='bg-dark bg-gradient text-light'>
      <Card.Body>
        <Card.Title>Utente {props.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Commento</Card.Subtitle>
        <Card.Text>
        {props.comment}
        </Card.Text>
        <Card.Footer>

        {props.rate}

        </Card.Footer>
      </Card.Body>
    </Card>

    
  
  
</Popover.Body>
</Popover>


}>
    

<Button variant="primary" className='mt-2'>Utente N: {props.id}</Button>

</OverlayTrigger>

<Delete _id={props._id}/>

</Container>

export default SingleComments;