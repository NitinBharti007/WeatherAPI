import React, { useEffect, useState } from 'react'

const SixteenDays = () => {
    const [weather, setWeather] = useState([]);
    
        useEffect(()=>{
            fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid={02d72a8f05563c64fc55ea27be858a27}")
            .then((res)=> res.json())
            .then((weather)=> setWeather(weather.slice(0,32)))
            .catch((error)=> console.log(error))
        },[])
      return (
        <div>
            <h2>4-Day Weather</h2>
            {
                weather.length ? (
                    weather.map((item,index)=>(
                        <div key={index}>
                            <p>{new Date(item.dt*1000).toLocaleString()}</p>
                            <p>Temp: {item.main.temp}*C</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
      )
}

export default SixteenDays
