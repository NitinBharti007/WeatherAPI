import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import FourDays from './components/FourDays'
import SixteenDays from './components/SixteenDays'

const App = () => {
  return (
    <div>
      <CurrentWeather/>
      <FourDays/>
      <SixteenDays/>
    </div>
  )
}

export default App
