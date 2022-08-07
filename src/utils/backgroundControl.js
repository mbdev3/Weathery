import cd from '../assets/bgp/clear_day.webp';
import cn from '../assets/bgp/starry.webp';
import cld from '../assets/bgp/cloud_day.webp';
import cln from '../assets/bgp/cloud_night.webp';
import m from '../assets/bgp/mist.webp';
import s from '../assets/bgp/snow.webp';
import r from '../assets/bgp/rain.webp';
import rn from '../assets/bgp/rain_night.webp';
import t from '../assets/bgp/thunderstorm.webp';

export const bgpControl = (i, status) => {
  switch (i) {
    case 'Clear':
      if (status) {
        return cn;
      }
      return cd;

    case 'Clouds':
      if (status) {
        return cln;
      }
      return cld;

    case 'Atmosphere':
      return m;

    case 'Snow':
      return s;

    case 'Rain':
      if (status) {
        return rn;
      }
      return r;

    case 'Drizzle':
      if (status) {
        return rn;
      }
      return r;

    case 'Thunderstorm':
      return t;

    default:
      return cn;
  }
};
//icons
import csi from '../assets/icons/clear-sky.png';
import cli from '../assets/icons/clouds.png';
import mi from '../assets/icons/fog.png';
import si from '../assets/icons/snowy.png';
import ri from '../assets/icons/rainy-day.png';
import di from '../assets/icons/rainy-day.png';
import ti from '../assets/icons/thunderstorm.png';
import cni from '../assets/icons/moon.png';
export const iconControl = (i, status) => {
  switch (i) {
    case 'Clear':
      if (status) {
        return cni;
      }
      return csi;

    case 'Clouds':
      return cli;

    case 'Atmosphere':
      return mi;

    case 'Snow':
      return si;

    case 'Rain':
      return ri;

    case 'Drizzle':
      return di;

    case 'Thunderstorm':
      return ti;

    default:
      return cni;
  }
};
//day
import hi from '../assets/icons/infoIcons/humidity.png';
import wi from '../assets/icons/infoIcons/wind.png';
import pi from '../assets/icons/infoIcons/rain.png';
import sri from '../assets/icons/infoIcons/sunrise.png';
import ssi from '../assets/icons/infoIcons/sunset.png';
//night
import hiw from '../assets/icons/infoIcons/humidity_white.png';
import wiw from '../assets/icons/infoIcons/wind_white.png';
import piw from '../assets/icons/infoIcons/rain_white.png';
import sriw from '../assets/icons/infoIcons/sunrise_white.png';
import ssiw from '../assets/icons/infoIcons/sunset_white.png';
export const infoIconsControl = (status) => {
  if (status) {
    return [hiw, wiw, piw, sriw, ssiw];
  }
  return [hi, wi, pi, sri, ssi];
};
