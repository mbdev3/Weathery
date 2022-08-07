import React from 'react';

const Forecast = ({ day, icon, temp_max, temp_min }) => {
  return (
    <div className='singleCard'>
      <p className='dayShort'>{day}</p>
      <div className='mainIcon'>
        <img src={icon} alt={icon} />
      </div>
      <p className='temp_max'>
        {temp_max}° / <span className='temp_min'>{temp_min}°</span>
      </p>
    </div>
  );
};

export default Forecast;
