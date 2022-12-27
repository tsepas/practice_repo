import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eafb942808d7f3d4d665029b4361002a`

  const searchLocation = (event) => {
    if(event.key === 'Enter' ){
      axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        />
      </div>
      <div class="container">
        <div class="top">
          <div class="location">
            <p>{data.name}</p>
          </div>
          <div class="temp">
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div class="descr">
            {data.weather ? <p>{data.weather[0].main}</p> : null} 
          </div>
        </div>
        <div class="bottom">
          <div class="feels">
            {data.main ? <p className='bold'>{data.main.feels_like} °F</p> : null}            
            <p>Feels Like</p>
          </div>
          <div class="humidity">
            {data.main ? <p className='bold'>{data.main.humidity} %</p> : null}            
            <p>Humidity</p>
          </div>
          <div class="wind">
            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}            
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
