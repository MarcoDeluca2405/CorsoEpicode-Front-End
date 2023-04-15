import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getAlbum, getHIPHOP, getPop, getRock } from "../redux/actions"
import AlbumCard from "./AlbumCard"
import AlbumCardGener from "./AlbumCardGener"



const MainPage = ()=>{

  const query=useSelector((state)=>state.albumList.search)
  console.log(query)
  const dispatch = useDispatch();
  const album =useSelector((state)=>state.albumList.album)
  const Rock =useSelector((state)=>state.albumList.rock)
  const Pop =useSelector((state)=>state.albumList.pop)
  const hip =useSelector((state)=>state.albumList.hiphop)
  console.log(hip)
  useEffect(()=>{dispatch(getAlbum(query), )},[query])
  useEffect(()=>{dispatch(getRock("Rock"))
   dispatch(getPop("Pop"))
    dispatch(getHIPHOP("hiphop")) },[])

return(

    <Col className="col-12 col-md-9 offset-md-3 mainPage">
    <Row className="row">
      <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>
    </Row>
    <Row className="row">
      <Col className="col-10">
       { query ? <div id="searchResults" >  


       <h2>Search Results</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" >
          {album?.map((el,i)=>{
            if(i<4){
            return<AlbumCard key={el.id} album={el} />
            }
          })}
        </div>

 </div> 
          
          : 
          
          <div id="searchResults" style={{display: 'none'}}> 
         
          </div>}
          
      </Col>
    </Row>
    <Row className="row">
      <Col className="col-10">
        <div id="rock">
          <h2>Rock Classics</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection" >
          {Rock?.map((el,i)=>{
            if(i<4){
            return<AlbumCardGener key={el.id} album={el} />
            }
          })}
            </div>
        </div>
      </Col>
    </Row>
    <Row className="row">
      <Col className="col-10">
        <div id="pop">
          <h2>Pop Culture</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection" >
          {Pop?.map((el,i)=>{
            if(i<4){
            return<AlbumCardGener key={el.id} album={el} />
            }
          })}
            </div>
        </div>
      </Col>
    </Row>
    <Row className="row">
      <Col className="col-10">
        <div id="hiphop">
          <h2>#HipHop</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection" >
          {hip?.map((el,i)=>{
            if(i<4){
            return<AlbumCardGener key={el.id} album={el} />
            }
          })}

            </div>
        </div>
      </Col>
    </Row>
  </Col>

)


}


export default MainPage