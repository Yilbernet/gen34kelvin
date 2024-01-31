import React, { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChange = () => {
        setIsCelsius(!isCelsius)
    }

    return (
        <>
        <section className='container-all'>
            <h1>Weather app</h1>
            <h2 className='country-name'>{weather?.name},{weather?.sys.country}</h2>
            <article>
                <figure>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                </figure>
                <div>
                    <h3 className='clouds'>{weather?.weather[0].description}</h3>
                    <ul>
                        <li><span>Wind speed: </span><span>{weather?.wind.speed} m/s</span></li>
                        <li><span>Clouds: </span><span>{weather?.clouds.all}</span>%</li>
                        <li><span>Pressure: </span><span>{weather?.main.pressure}</span> hPA</li>
                        <li><span>Humidity: </span><span>{weather?.main.humidity} %</span></li>
                    </ul>
                </div>
            </article>
            <div>
                <h3 className='temp'>{
                    isCelsius ?
                        temp?.celsius + '°C'
                        :
                        temp?.fahrenheit + '°F'
                }

                </h3>
                <button onClick={handleChange}>
                    Change to {isCelsius ? '°F' : '°C'}
                </button>
            </div>
        </section>
        </>


    )
}

export default WeatherCard