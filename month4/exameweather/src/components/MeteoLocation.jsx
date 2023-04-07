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
            
            const urlCoding=`http://api.openweathermap.org/geo/1.0/direct?q=${city},IT&limit=1&appid=8cdafc0e1a99c13d56957f350ac92768`;
    
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
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8cdafc0e1a99c13d56957f350ac92768`;
            const responsive=await fetch(url)
                const data=await responsive.json();
                console.log("datati Meteo Luogo",data)
                dispatch({
                    type:'Set_Temp_Location',
                    payload:data.main
                })
                dispatch({
                    type:'set_Weather',
                    payload:data.weather.main
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

        <Container className="d-flex justify-content-center ">
<Card style={{ width: '30rem' }} className="bg-dark">
        {weather&&"Clear" && (<img src="https://thumbs.dreamstime.com/b/cielo-libero-492457.jpg" className="imgw" alt="clear"></img> )}
        {weather&&"Sun" && (<img src="https://thumbs.dreamstime.com/b/cielo-libero-492457.jpg" className="imgw" alt="clear"></img> )}
        {weather&&"Rain" && (<img src="https://thumbs.dreamstime.com/b/cielo-libero-492457.jpg"  className="imgw" alt="clear"></img> )}
        
      
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