import { Card, CardImg} from "react-bootstrap";



const Filmcard = (props) =>
<>
     
    <Card  className="cardImg" >

                <CardImg key={props.key} src={props.src.Poster} style={{height:"400px"}}/>  

     </Card>

</>
export default Filmcard