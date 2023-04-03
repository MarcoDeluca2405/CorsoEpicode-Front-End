import { Component } from "react";
import CommentsList from "./CommentsList";


class CommentArea extends Component{

   key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODA1MjQ5MTEsImV4cCI6MTY4MTczNDUxMX0.2oZYBhfhQhXaCbaDznH8hSqN7XVcpu9midKv8npjpO4";
    url="https://striveschool-api.herokuapp.com/api/comments/"

    getDataBooks= async () =>{
        try {
            
            let   resposive = await fetch (this.url+this.props.selectedBook, {
                method:"GET",
                headers: {
                    "Authorization": this.key
                }
            }
                );
    
                if(resposive.ok){
              let  data= await resposive.json();
                    console.log(data);
                    this.setState({
                        data:data,
                    })

                }else{
                    console.log("errore durante la fetch");

                }


        } catch (error) {
                console.log("oh oh qualcosa è andato storto ", error);
        }
    
    }
    


    componentDidMount(){
        this.getDataBooks();
    }


    componentDidUpdate(prevProps,prevState){

        if(prevProps.selectedBook !==this.props.selectedBook){
            this.getDataBooks();
        }

    }

    state ={
        data: [],
    }



    render(){

        return(

            <CommentsList comments={this.state.data} />
                

        )

    }


}


export default CommentArea;