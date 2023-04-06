import { useEffect, useState } from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import Job from './Job'
import { useNavigate, useParams } from 'react-router-dom'


const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()
  const navigate=useNavigate();
  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    getJobs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
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
