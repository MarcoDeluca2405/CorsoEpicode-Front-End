import { useSelector } from "react-redux"
import FavoriteList from "./FavoriteList"


const FavoriteTrack= ()=>{
    const MyfavTrack=useSelector((state)=>state.albumList.fav)
   
    return(

        <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>

           
        {
            MyfavTrack?.map((el,i)=>{
                console.log(el.track)
                return <FavoriteList key={el.id} track={el.track} index={i}/>

            })
        }
    


        </div>

        

    )


}

export default FavoriteTrack