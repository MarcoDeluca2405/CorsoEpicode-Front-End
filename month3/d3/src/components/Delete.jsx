
import Button from 'react-bootstrap/Button';
let key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODA1MjQ5MTEsImV4cCI6MTY4MTczNDUxMX0.2oZYBhfhQhXaCbaDznH8hSqN7XVcpu9midKv8npjpO4";
let  url="https://striveschool-api.herokuapp.com/api/comments/"





    async function deletePost(id){
     await fetch(url+id,{

        method: "DELETE",
        headers: {
            "Authorization": key,
        }
        
    })
    console.log(id)
    }



   

   



const Delete = (props) =>

    
    <Button variant="outline-danger" type="submit" size="sm" onClick={()=>{deletePost(props._id)}}>Delete</Button>




export default Delete;