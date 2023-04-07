import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainHome = ()=>{
    const [city,setCity]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    return(

<div class="p-4 shadow-4 myHero">
  <h2>Previsione Meteo</h2>
  <p>
        Verifica il meteo in ogni momento della tua vita con grande facilità
  </p>

  <hr class="my-4" />

        <Container>

         <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Location:</InputGroup.Text>
        <Form.Control
          placeholder="Location"
          value={city}
          onChange={(e)=>{setCity(e.target.value)}}
          />
        <Button variant='dark' onClick={
            ()=>{
                dispatch({
                    type:"Search_City",
                    payload:city
                });
                setCity("");
              navigate("/Meteo")
              
            }


        }>Search</Button>
      </InputGroup>

          </Container>

</div>

    )
}

export default MainHome