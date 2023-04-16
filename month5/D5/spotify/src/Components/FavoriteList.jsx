import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeFavorite, selectedTrack } from "../redux/actions"
import * as Icon from "react-icons/ri"


const FavoriteList= (props)=>{
    const dispatch=useDispatch()
    const [fav,setFav]= useState(false)

    return(

        <div className="py-3 trackHover d-flex justify-content-between"  onClick={()=>{dispatch(selectedTrack(props))}}>
        
     

        {
               
                  
                  
                  <div className="text-light" onClick={()=>{
                    setFav(false)
                    dispatch(removeFavorite(props.index))
                    
                    }} >
                <Icon.RiHeartsFill size={20} />
                </div>
                
                
                }
                
              
                
              
                    <a href="#" className="card-title trackHover px-3" style={{color:"white"}} > {
                      props.track.title
                    }</a>
                    <small className="duration" style={{color:"white"}}>{Math.floor(
                      parseInt(props.track.duration) / 60 // setting the duration minutes
                    )}:{
              parseInt(props.track.duration) % 60 < 10
                ? "0" + (parseInt(props.track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                : parseInt(props.track.duration) % 60
            }</small>
                </div>

    )

}

export default FavoriteList