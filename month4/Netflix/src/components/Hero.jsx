import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

const Hero = () =>


<div className='ms-0 MyDiv my-4'>
    <Container className='d-flex'>
<h2>Tv Show</h2>
<Dropdown className='mx-3'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Genere
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</Container>

<Container>
    <Button variant='dark'>
    <Icon.FilterLeft />
    </Button>
    <Button variant='dark'>
    <Icon.Grid />
    </Button>
</Container>

</div>



export default Hero;