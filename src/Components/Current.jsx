import React, { useRef, useEffect } from 'react';
import Wrapper from '../assets/Wrappers/Current[SC]';

const Current = ({
  date,
  city,
  temp,
  temp_max,
  temp_min,
  humidity,
  sunrise,
  sunset,
  desc,
  wind,
  precipitation,
  mainIcon,
  mainTempColor,
  humidityIcon,
  windIcon,
  rainIcon,
  sunriseIcon,
  sunsetIcon,
  secondColor,
}) => {
  const current = useRef(null);
  const animationControl = () => {
    const element = current.current;
    element.classList.add('animate__animated', 'animate__fadeIn');

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeIn');
    });
  };
  useEffect(() => {
    animationControl();
  }, [city]);
  // current.current && animationControl();
  return (
    <Wrapper
      className='animate__animated animate__fadeIn'
      ref={current}
      mainTempColor={mainTempColor}
      secondColor={secondColor}>
      <div className='date-city'>
        <div>{date} </div>
        <div>{city}</div>
      </div>
      <div className='main'>
        <div className='icon'>
          <img src={mainIcon} alt='' />
        </div>
        <div className='temperatureInfo'>
          <p className='temp'>{temp}°C</p>

          <p className='temp_max'>
            {temp_max}° / <span className='temp_min'>{temp_min}°</span>
          </p>
          <p className='desc'>{desc}</p>

          <div className='otherInfo'>
            <div className='humidity'>
              <img src={humidityIcon} alt='humidity' /> <p>{humidity} %</p>
            </div>
            <div className='wind'>
              <img src={windIcon} alt='wind speed' /> <p>{wind} km/s</p>
            </div>
            <div className='precipitation'>
              <img src={rainIcon} alt='precipitation' /> <p>{precipitation} mm</p>
            </div>
          </div>
          <div className='sun'>
            <div className='sunrise'>
              <img src={sunriseIcon} alt='sunrise' /> <p>{sunrise} </p>
            </div>
            <div className='sunset'>
              <img src={sunsetIcon} alt='sunset' /> <p>{sunset} </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Current;
