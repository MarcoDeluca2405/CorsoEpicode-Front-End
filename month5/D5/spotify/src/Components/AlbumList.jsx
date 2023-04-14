import { Link } from "react-router-dom"


const AlbumList = (props)=>{

    return(

         <div class="col-sm-auto col-md-auto text-center mb-5">
            <Link to="/Album">

              <img class="img-fluid" src={
                  props.album.album.cover_medium // creating the album image anchor
                } alt="1" />
                </Link>
            
            <p>
              <a href="#">
                Track: "${
                  props.album.title.length < 16
                    ? props.album.title
                    : props.album.title.substring(0, 16) // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </a><br></br>
              <Link to="/Album">

                Album: "${
                    props.album.album.title.length < 16
                    ? props.album.album.title
                    : props.album.album.title.substring(0, 16) // setting the track title, if it's longer than 16 chars cuts the rest
                }"
                </Link>
              
            </p>
          </div>
    )

}

export default AlbumList