import React, { useEffect, useState } from 'react';

const CurrentWeather = () => {
    const [weather, setWeather] = useState(null); // Changed to null instead of array

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=6099ceaecefd0bb4e965970fb19ad954")
        .then((res) => res.json())
        .then((data) => setWeather(data)) // Storing the whole weather object
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2>Current Weather</h2>
            {
                weather ? ( // Check if weather data is available
                    <div>
                        <p>Condition: {weather.weather[0].description}</p> {/* Access condition description */}
                        <p>Temp: {weather.main.temp}°C</p> {/* Access temperature */}
                    </div>
                ) : (
                    <p>Loading...</p> // Show loading if data is not yet fetched
                )
            }
        </div>
    );
};

export default CurrentWeather;
