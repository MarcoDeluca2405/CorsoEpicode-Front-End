import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const MeteoLocation= () =>{
    
    const city=useSelector((state)=>state.meteo.Location.City);
    const LocationTemp=useSelector((state)=>state.meteo.Location.LocationTemp);
    const lat=useSelector((state)=>state.meteo.Location.lat);
    const lon=useSelector((state)=>state.meteo.Location.lon);
    const weather=useSelector((state)=>state.meteo.Location.Weather);
    const dispatch=useDispatch();
    console.log(city,lon,lat)
    


    
    
    const getLocationL=async ()=>{
        
        try {
            
            const urlCoding=`http://api.openweathermap.org/geo/1.0/direct?q=${city},IT&limit=1&appid=f67f359c5dc6e42aadd29c188f4f7358`;
    
            const resposive=await fetch(urlCoding);
            if(resposive.ok){
                const data=await resposive.json();
                console.log("Dati Luogo:",data)
                data.map(el=>{
                    return(
                    dispatch({
                        type:'Set_Lat',
                        payload:el.lat       
                    }
                    ),
                    dispatch({
                        type:'Set_Lon',
                        payload:el.lon
                    })
                    )
                })
                
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    
    const getLocationM=async ()=>{
   
        try {   
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f67f359c5dc6e42aadd29c188f4f7358`;
            const responsive=await fetch(url)
                const data=await responsive.json();
                console.log("datati Meteo Luogo",data)
                dispatch({
                    type:'Set_Temp_Location',
                    payload:data.main
                })
                dispatch({
                    type:'set_Weather',
                    payload:data.weather[0]
                })
                
            } catch (error) {
                console.log(error)
            }
            
        }
        
        useEffect(()=>{
            getLocationL()
        getLocationM()
        }
        ,[useSelector((state)=>state.meteo.Location.City)])
        
   

    return(

        <Container className="d-flex justify-content-center">
<Card style={{ width: '20rem' }} className="bg-dark my-4">
   
  {weather.main==="Clear" && (<Card.Img variant="top" src="https://thumbs.dreamstime.com/b/cielo-libero-492457.jpg" className="imgw" alt="clear" />)}
        {weather.main==="Sun" && (<Card.Img variant="top" src="https://thumbs.dreamstime.com/b/cielo-libero-492457.jpg" className="imgw" alt="clear" /> )}
        {weather.main==="Rain" && (<Card.Img variant="top" src="https://thumbs.dreamstime.com/b/cielo-libero-492457.jpg"  className="imgw" alt="clear" /> )}
        {weather.main==="Drizzle" && (<Card.Img variant="top" src="https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpenpsZXxlbnwwfHwwfHw%3D&w=1000&q=80"  className="imgw" alt="clear" /> )}
        {weather.main==="Clouds" && (<Card.Img variant="top" src="https://www.rmets.org/sites/default/files/2022-05/Depositphotos_8469695_XL_0.jpg"  className="imgw" alt="clear" /> )}
    
      
      <Card.Body>
        <Card.Title className="border border-1 bg-dark text-light">{city}</Card.Title>
        <Card.Text className="d-colum border border-1 bg-dark text-light">
         
 
        {LocationTemp &&   <p>Temperatura: {LocationTemp.temp} °C</p>}

          {LocationTemp &&  <p>Temp min: {LocationTemp.temp_min}°C</p> }
          {LocationTemp &&  <p>Temp max: {LocationTemp.temp_max}°C</p> }
          {LocationTemp && <p>Pressione: {LocationTemp.pressure} bar</p> }
          {LocationTemp &&  <p>Umidità: {LocationTemp.humidity} um</p> }
            
        
                                                 
   
     
        </Card.Text>
      </Card.Body>
    </Card>


        </Container>

    )

}

export default MeteoLocation