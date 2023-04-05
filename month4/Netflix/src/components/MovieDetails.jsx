import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
let url="http://www.omdbapi.com/?&apikey=769155e5&i=";
let urlC="https://striveschool-api.herokuapp.com/api/comments/";
let authorazation="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODA3MDU3ODUsImV4cCI6MTY4MTkxNTM4NX0.kCItpIFab3GyF_QakGEv_-2y83ZmzhMAZ_8s6RQy5u8";

const MovieDetails =(props)=>{


    let params= useParams();
    console.log(params);

const [imdbID, setImdbID] = useState("");


const navigate=useNavigate();


const getFilms= async () =>{
try {
   

    let resposive= await fetch(url+params.imdbID);

    if(resposive.ok){

    let data=await resposive.json();
    setImdbID(data);
    console.log(data);
    }else{
        console.log("errore di comunicazione con il server!");
    }

} catch (error) {   
    console.log("Qualcosa è andato storto: ",error);
}

}

const getComments= async () =>{
try {
   
    let resposive= await fetch(urlC+params.imdbID,{
        headers:{
            "Authorization": authorazation
        }
    });

    if(resposive.ok){

    let data=await resposive.json();
    let s= props.changeMovie(data);
    console.log(data);
    }else{
        console.log("errore di comunicazione con il server!");
    }

} catch (error) {   
    console.log("Qualcosa è andato storto: ",error);
}




}




useEffect(()=>{getComments()},[params.imdbID])
useEffect(()=>{getFilms()},[props.comments])

return(

    <Container className="justify-content-center">

 

       
        
        <Card key={params.imdbID} bg="dark" className="d-inline-flex" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imdbID.Poster} />
      <Card.Body>
        <Card.Title>{imdbID.Title}</Card.Title>
        <Card.Text>
            {imdbID.Plot}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button onClick={()=>{
        navigate("/movie-details/comments/"+imdbID.imdbID) 
        
        }}>See Comments</Button>
      </Card.Footer>
    </Card>
       
        

       


    </Container>

);

}


export default MovieDetails;