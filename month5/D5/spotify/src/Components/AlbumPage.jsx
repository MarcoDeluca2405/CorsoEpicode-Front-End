import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAlbumSelected } from "../redux/actions";
import TrackList from "./TrackList";


const AlbumPage= ()=>{
    const dispatch=useDispatch();
    const Artist=useSelector((state)=>state.albumList.selected)
    const albumAll=useSelector((state)=>state.albumList.selectedAlbum.tracks)
    useEffect(()=>{dispatch(getAlbumSelected(Artist.album.album.id))},[Artist])
    
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
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container" >
      
        <img src={Artist.album.album.cover} class="card-img img-fluid" alt="Album" />
            <div class="mt-4 text-center">
                <p class="album-title">{Artist.album.title}</p>
            </div>
            <div class="text-center">
                <p class="artist-name">{Artist.album.artist.name}</p>
            </div>
            <div class="mt-4 text-center">
                <button id="btnPlay" class="btn btn-success" type="button">Play</button>
            </div>
            
        

            </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList" >

              {
                albumAll?.data?.map((el,i)=>{
                    console.log()
                    return <TrackList key={el.id} track={el} index={i}/>

                })
              }

            </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default AlbumPage