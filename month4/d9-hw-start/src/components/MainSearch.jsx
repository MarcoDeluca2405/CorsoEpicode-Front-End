import { useState } from 'react'
import { Container, Row, Col, Form,Button } from 'react-bootstrap'
import Job from './Job'
import { useNavigate } from 'react-router-dom'
import { setArrayFatch } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const getJob= useSelector((state)=>state.save.save.content)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(setArrayFatch(query))

  } 

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {getJob.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
            <Col>
            
            <Button className='my-4 bg-dark' onClick={()=>{navigate('/favourites')}}>Favoriti</Button>
            </Col>

      </Row>
    </Container>
  )
}

export default MainSearch
