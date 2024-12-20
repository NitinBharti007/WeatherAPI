import React, { useEffect, useState } from 'react';

const CurrentWeather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=6099ceaecefd0bb4e965970fb19ad954")
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2>Current Weather</h2>
            {
                weather ? ( 
                    <div>
                        <p>Condition: {weather.weather[0].description}</p>
                        <p>Temp: {weather.main.temp}°C</p> 
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default CurrentWeather;
