import React, { useEffect, useState } from 'react';

const FourDays = () => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&units=metric&appid=02d72a8f05563c64fc55ea27be858a27")
        .then((res) => res.json())
        .then((data) => setWeather(data.list.slice(0, 32)))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2>4-Day Weather</h2>
            {weather.map((item, index) => (
                <div key={index}>
                    <p>{new Date(item.dt * 1000).toLocaleString()}</p>
                    <p>Temp: {item.main.temp}°C</p>
                </div>
            ))}
        </div>
    );
};

export default FourDays;
