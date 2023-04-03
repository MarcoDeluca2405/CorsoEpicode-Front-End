import { ListGroup, ListGroupItem } from "react-bootstrap";
import SingleComments from "./SingleComments";
import { Component } from "react";




class CommentsList extends Component{


    render(){
     
        return(

    <ListGroup>

        <ListGroupItem>

            {this.props.comments.map(el =>{

                return(
                    
                <SingleComments _id={el._id} comment={el.comment} rate={el.rate} id={el.elementId} />
               
                );


            })}

            

        </ListGroupItem>


    </ListGroup>

        )

    }
}
export default CommentsList;