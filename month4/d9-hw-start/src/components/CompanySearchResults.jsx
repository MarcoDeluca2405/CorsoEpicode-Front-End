import { useEffect } from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import Job from './Job'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsFetch } from '../redux/actions'


const CompanySearchResults = () => {
  const params = useParams();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const job=useSelector((state)=>state.save.save.company)


  useEffect(() => {
    dispatch(getJobsFetch(params.companyName))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[params.companyName])



  return (
    <Container>
      <Row>
        <Col>
          {job.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        <Col>
          <Button className='my-4 bg-dark' onClick={()=>{navigate('/favourites')}}>Favoriti</Button>
          <Button className='my-4 bg-success' onClick={()=>{navigate('/')}}>Home</Button>
        </Col>
      </Row>


      
    </Container>
  )
}

export default CompanySearchResults
