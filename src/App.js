import React,{useState,useEffect,useCallback} from 'react'
import './App.css'
import {weatherInfo,getImageCity,weatherNow} from './API/weatherApi' 
import DayInformation from './components/DayInformation'
import CityInformation from './components/CityInformation'
import WeatherDay from './components/WeatherDay'
import Loading from './components/Loading'
                                        
function toDayName(day){
  switch (day) {
    case 1:
      return 'LUN'
      break;
    case 2:
      return 'MAR'
      break;
    case 3:
      return 'MER'
      break;
    case 4:
      return 'JEU'
      break;
    case 5:
      return 'VEN'
      break;
    case 6:
      return 'SAM'
      break;
    case 0:
      return 'DIM'
      break;
    default:
      return ''
      break;
  }
}
function App() {
  const [data, setData] = useState(null)
  const [dataNow,setDataNow] = useState(null)
  const [linkImage, setLinkImage] = useState('')
  const [loader, setLoader] = useState(true)
  
  useEffect(()=>{
    if(data !== null && linkImage !== ''){ 
      document.body.style.backgroundImage = `url("${linkImage}")`
      setLoader(false)
    }  
    else{
      getImageCity().then((response)=>{setLinkImage(response)})
      weatherInfo('Ottawa').then((response)=>{
        if (typeof (response) === 'string') alert(response)
        else setData(response)
      })
      weatherNow('Ottawa').then((response)=>{
         if (typeof (response) === 'string') alert(response)
         else setDataNow(response)
      })
    }
  },[data,linkImage])


  const searchWeather = (e) => {
    e.preventDefault()
    setLoader(true)
     weatherNow(e.target.elements[0].value.trim()).then((response) => {
        if (typeof (response) === 'string') alert(response)
        else setDataNow(response)
     }).then(() => {
        weatherInfo(e.target.elements[0].value.trim()).then((response) => {
           if (typeof (response) === 'string') alert(response)
           else setData(response)
           setLoader(false)
        })
     })
  }

  return (
     loader ? <Loading />
     :
    <>
    <form onSubmit={searchWeather}>
      <input type="search" className="input-search" name="search" placeholder="Search City"/>
    </form>
    <div className="container">
       <CityInformation nameVille={dataNow.name} hatitude={Math.round(dataNow.coord.lat)} langitude={Math.round(dataNow.coord.lon)} code={dataNow.weather[0].icon} />
       <DayInformation temp={Math.round(dataNow.main.temp - 273.15)} time={new Date(dataNow.dt).getHours() +':'+ new Date(dataNow.dt).getMinutes()} humidity={dataNow.main.humidity} wind={Math.round(dataNow.wind.speed * 3.6)}/>
      <div className="week-weather">
       <WeatherDay key={1} day={toDayName(new Date(data.list[0].dt_txt).getDay())} degree={Math.round(data.list[0].main.temp - 273.15)}  code={data.list[0].weather[0].icon} />
       <span className="line"></span>
       <WeatherDay key={2} day={toDayName(new Date(data.list[1].dt_txt).getDay())} degree={Math.round(data.list[1].main.temp - 273.15)} code={data.list[1].weather[0].icon} />
       <span className="line"></span>
       <WeatherDay key={3} day={toDayName(new Date(data.list[26].dt_txt).getDay())} degree={Math.round(data.list[26].main.temp - 273.15)} code={data.list[26].weather[0].icon} />
       <span className="line"></span>
       <WeatherDay key={4} day={toDayName(new Date(data.list[35].dt_txt).getDay())} degree={Math.round(data.list[35].main.temp - 273.15)} code={data.list[35].weather[0].icon} />
       <span className="line"></span>
       <WeatherDay key={5} day={toDayName(new Date(data.list[39].dt_txt).getDay())} degree={Math.round(data.list[39].main.temp - 273.15)} code={data.list[39].weather[0].icon} />
      </div>
    </div>
    <a href="https://www.pexels.com" target="_blank" >pictures source</a>
    </>
  );
}
export default App