import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import FourDays from './components/FourDays';
import SixteenDays from './components/SixteenDays';

const App = () => {
    return (
        <div>
            <div className="component-wrapper">
                <CurrentWeather />
            </div>
            <div className="component-wrapper">
                <FourDays />
            </div>
            <div className="component-wrapper">
                <SixteenDays />
            </div>
        </div>
    );
};

export default App;
