export const getCurrentTime = (i, current) => {
  if (current) {
    let format = new Date(i * 1000);
    let day = format.toLocaleString('en-us', { weekday: 'long' });
    let localTimezone = format.getTimezoneOffset() * 60;
    let minutes = format.getMinutes();
    let timezone = current.timezone;

    let hours = format.getHours() + (timezone + localTimezone) / 3600;
    hours >= 24 ? (hours = hours - 24) : hours <= 0 ? (hours = hours + 24) : hours;

    if (hours % 1 !== 0) {
      hours = Math.floor(hours);
      if (minutes >= 30) {
        minutes -= 30;
        hours += 1;
      }
      minutes += 30;
    }

    hours < 10 ? (hours = '0' + hours) : hours;

    minutes < 10 ? (minutes = '0' + minutes) : minutes;

    return day + ', ' + hours + ':' + minutes;
  }
};

export const getHourMin = (i, current) => {
  if (current) {
    let format = new Date(i * 1000);

    let localTimezone = format.getTimezoneOffset() * 60;
    let minutes = format.getMinutes();
    let timezone = current.timezone;

    let hours = format.getHours() + (timezone + localTimezone) / 3600;
    hours >= 24 ? (hours = hours - 24) : hours <= 0 ? (hours = hours + 24) : hours;

    if (hours % 1 !== 0) {
      hours = Math.floor(hours);
      if (minutes >= 30) {
        minutes -= 30;
        hours += 1;
      }
      minutes += 30;
    }

    hours < 10 ? (hours = '0' + hours) : hours;

    minutes < 10 ? (minutes = '0' + minutes) : minutes;
    return hours + ':' + minutes;
  }

  // return DateTime.fromISO(i).hour + ':' + DateTime.fromISO(i).minute;
};
export const getDay = (i) => {
  let date = new Date(i * 1000);
  let day = date.toLocaleString('en-us', { weekday: 'long' });
  return day;
};
