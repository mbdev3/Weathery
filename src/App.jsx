import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Components/search';
import Current from './Components/Current';

import { bgpControl, iconControl, infoIconsControl } from './utils/backgroundControl';

import Forecast from './Components/Forecast';

import Wrapper from './assets/Wrappers/Forecast[SC]';
import logo from './assets/icons/weathery.png';
import { getCurrentTime, getHourMin, getDay } from './utils/timeTravel';
function App() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [ipInfo, setIpInfo] = useState({ lat: '', lon: '', city: '' });
  const [dayState, setDayState] = useState(false);

  const getUserLocation = async () => {
    try {
      let response = await axios.get(`https://ipinfo.io/?token=${import.meta.env.VITE_IP_KEY}`);
      const lat = response.data.loc.split(',')[0];
      const lon = response.data.loc.split(',')[1];
      setIpInfo({ lat, lon, city: response.data.city });
    } catch (error) {
      console.log(error);
    }
  };
  const displayAuto = async () => {
    const lat = ipInfo.lat;
    const lon = ipInfo.lon;
    try {
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setCurrent({ city: ipInfo.city, ...currentResponse.data });
      setForecast(forecastResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value;

    try {
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setCurrent({ city: searchData.name, ...currentResponse.data });
      setForecast(forecastResponse.data);
      console.log(currentResponse.data.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserLocation();
    if (ipInfo.city) {
      displayAuto();
    }

    console.log(ipInfo);
  }, [ipInfo.city]);

  const element = useRef(null);
  const animationControl = () => {
    const ele = element.current;
    ele.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');

    ele.addEventListener('animationend', () => {
      ele.classList.remove('animate__animated', 'animate__fadeInLeft');
    });
  };
  useEffect(() => {
    element.current && animationControl();
  }, [current]);

  const handleDayStatus = (i, sunrise, sunset) => {
    let rt = parseInt(getHourMin(i, current).split(':')[0]);
    let sr = parseInt(getHourMin(sunrise, current).split(':')[0]);
    let ss = parseInt(getHourMin(sunset, current).split(':')[0]);

    if (rt > ss || rt <= sr) {
      return true; //night
    }
    return false;
  };

  useEffect(() => {
    if (current) {
      setDayState(handleDayStatus(current.dt, current.sys.sunrise, current.sys.sunset));
    }
  }, [current, dayState]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (current) {

  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className='App'>
      {current ? (
        <img
          src={bgpControl(current.weather[0].main, dayState)}
          alt=''
          id='background-picture'
          className='animate__animated animate__fadeIn'
        />
      ) : (
        <div src={''} alt='' id='background-picture' className='firstBg' />
      )}
      <div className='top'>
        <img src={logo} alt='' className='logo' />
        <Search onSearchChange={onSearchChange} />
      </div>

      {current && (
        <Current
          mainIcon={iconControl(
            current.weather[0].main,
            handleDayStatus(current.dt, current.sys.sunrise, current.sys.sunset)
          )}
          date={getCurrentTime(current.dt, current)}
          city={current.city}
          temp={Math.round(current.main.temp)}
          temp_min={Math.round(current.main.temp_min)}
          temp_max={Math.round(current.main.temp_max)}
          humidity={current.main.humidity}
          sunrise={getHourMin(current.sys.sunrise, current)}
          sunset={getHourMin(current.sys.sunset, current)}
          main={current.weather[0].main}
          desc={current.weather[0].description}
          wind={current.wind.speed}
          precipitation={current.rain ? current.rain['1h'] : 0}
          mainTempColor={dayState ? '#dee2e6' : '#495057'}
          secondColor={dayState ? '#f8f9fa' : '#495057'}
          humidityIcon={infoIconsControl(dayState)[0]}
          windIcon={infoIconsControl(dayState)[1]}
          rainIcon={infoIconsControl(dayState)[2]}
          sunriseIcon={infoIconsControl(dayState)[3]}
          sunsetIcon={infoIconsControl(dayState)[4]}
        />
      )}

      {forecast && (
        <Wrapper ref={element} mainTempColor={dayState ? '#dee2e6' : '#495057'}>
          {forecast.list.map((day, id) => {
            if (id % 8 === 0 || id === 0) {
              return (
                <Forecast
                  key={id}
                  day={getDay(day.dt)}
                  icon={iconControl(day.weather[0].main)}
                  temp_min={Math.round(day.main.temp_min)}
                  temp_max={Math.round(day.main.temp_max)}
                />
              );
            }
          })}
        </Wrapper>
      )}
      <section className='copyright'>
        Created by{' '}
        <a href='https://thembdev.com'>
          <img
            src={'https://mbdev-utils.s3.eu-west-3.amazonaws.com/mbdev_logo_sm.svg'}
            alt='mbdev'
          />
        </a>
      </section>
    </div>
  );
}

export default App;
