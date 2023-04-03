import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODA1MjQ5MTEsImV4cCI6MTY4MTczNDUxMX0.2oZYBhfhQhXaCbaDznH8hSqN7XVcpu9midKv8npjpO4";
let  url="https://striveschool-api.herokuapp.com/api/comments/"




class AddComment extends Component{


    state={

        utente:{
        comment:"",
        rate:1,
        elementId:this.props.selectedBook,
        }
    }

     setComments= async ()=>{

        try {
               
            

            let   resposive = await fetch (url, {
                method:"POST",

                headers: {
                    "Authorization": key,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(this.state.utente),
            }
                );
    
                if(resposive.ok){
                        console.log("Inserito");
                    }else{
                    console.log("errore durante la fetch");

                }


        } catch (error) {
                console.log("oh oh qualcosa è andato storto ", error);
        }
        
    }

 

    render(){

        return(
            <Form className="p-5" onSubmit={(e)=>{
                e.preventDefault()
                this.setComments()
            }}> 
                
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h2>Commento:</h2></Form.Label>
        <Form.Control as="textarea" rows={3} value={this.state.comment} onChange={(e)=>{this.setState({utente:{
            ...this.state.utente,
            comment:e.target.value
        }})}}/>
      </Form.Group>
      <Form.Select aria-label="Rate:" value={this.state.rate} onChange={(e)=>{this.setState({utente:{
        ...this.state.utente,
        rate:e.target.value
      }})}} >
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );

    }


}


export default AddComment;