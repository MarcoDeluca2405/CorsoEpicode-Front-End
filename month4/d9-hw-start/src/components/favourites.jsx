import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from 'react-bootstrap/esm';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Favorites= ()=>{
    
   const favoriteComapny=useSelector((state)=>state.user.favorite)
   const dispatch=useDispatch();
    const navigate=useNavigate();


    return(
        
        
        
        <Row>
            <Col>

        <ListGroup>
           


        {favoriteComapny.map((user,i)=>{
            console.log(user,i)
            return(
                
                <ListGroup.Item key={i}><a href={user.url}>{user.title},  {user.company_name}</a> <Button bg="danger" onClick={()=>{dispatch({
                    type:'DELETTE_FAVORITE',
                    payload:i,
                })}}>Delete</Button> </ListGroup.Item>

            )

        })}

       
     
    </ListGroup>

                <Button bg="dark" onClick={()=>{navigate("/")}}>Home</Button>

            </Col>
        </Row>
       
    );

}

export default Favorites