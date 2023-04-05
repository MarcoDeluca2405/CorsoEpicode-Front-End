import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';



const SingleMovies= (props)=>{

   let [comment,setComment] = useState(props.comments);


  

   console.log(comment)

return(

    <ListGroup className='mt-2 d-flex align-items-center'>
        
    {comment?.map((el)=>{

        return <ListGroupItem className='my-1 w-75 bg-dark bg-gradient text-light' key={el._id}> <span className='text-danger'> User: {el.author} </span>| Comment: {el.comment} | Rate: {el.rate} </ListGroupItem>

    })}

       
   
  </ListGroup>

)


}


export default SingleMovies;