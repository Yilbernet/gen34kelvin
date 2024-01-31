import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  const success = position => {
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }
    setCoords(obj)
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  },[])

  useEffect(() => {
    if(coords){
      const APIkey = '2075bba01cfd7276879dbdf256473098'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`;
      axios.get(url)
      .then(res => {
        const obj = {
          celsius : (res.data.main.temp - 273.15).toFixed(2),
          fahrenheit : ((res.data.main.temp - 273.15) * (9/5) + 32).toFixed(2),
        }
          setTemp(obj)
          setWeather(res.data)
        })
      .catch(err => console.log(err))
    }
  }, [coords])

  console.log(weather)
  

  return (
    <>
        <WeatherCard
          weather= {weather}
          temp = {temp}
        />
    </>
  )
}

export default App
