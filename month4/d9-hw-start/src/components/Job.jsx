import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../redux/actions';


const Job = ({ data }) => {

  
  const dispatch= useDispatch();




return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
     
    <Col xs={3}>
   
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={4}>

      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
</Col>
  <Col xs={5}>
      <Button className="mx-2" bg="succes" onClick={
        ()=>{
          dispatch(addFavorite(data))
        console.log("è stato aggiunto un nuovo elemento: ",data.title)
        
        }

      } >Add Favorite</Button>
    
    </Col>

   

  

  </Row>
)
}

export default Job
