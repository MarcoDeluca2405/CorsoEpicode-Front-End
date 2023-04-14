

const TrackList = (props)=>{

return(

    <div class="py-3 trackHover">

                <a href="#" class="card-title trackHover px-3" style={{color:"white"}} >{
                  props.track.title
                }</a>
                <small class="duration" style={{color:"white"}}>{Math.floor(
                  parseInt(props.track.duration) / 60 // setting the duration minutes
                )}:{
          parseInt(props.track.duration) % 60 < 10
            ? "0" + (parseInt(props.track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
            : parseInt(props.track.duration) % 60
        }</small>
            </div>

)

}

export default TrackList