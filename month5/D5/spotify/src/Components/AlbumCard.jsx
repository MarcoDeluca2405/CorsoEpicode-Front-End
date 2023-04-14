import { useDispatch } from "react-redux"
import { setSelected } from "../redux/actions";
import { Link } from "react-router-dom";


const AlbumCard = (props)=>{
    const dispatch=useDispatch();
    return(

       
        <div className="col text-center p-2" id={props.album.id} onClick={()=>{dispatch(setSelected(props))}}>
        <Link to="/Album">

          <img class="img-fluid" src={
              props.album.album.cover_medium
            } alt="1" />
            </Link>
        
        <p>
          <Link to="/Album">

            Album: "{
                props.album.album.title.length < 16
                ? props.album.album.title
                : props.album.album.title.substring(0, 16)
            }"<br></br>
          
            </Link>
            <Link to="/Artist">

            Artist: {props.album.artist.name}
            </Link>
  
        </p>
      </div>


    )


}

export default AlbumCard