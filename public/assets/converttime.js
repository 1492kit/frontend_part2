export default function convertTime(postDate, currentDate) {
  const timeDifference = currentDate - postDate;
  const years = timeDifference / 31536000000;
  const days = timeDifference / 86400000;
  const hours = timeDifference / 3600000;
  const minutes = timeDifference / 60000;
  const yearLastDigit = Math.floor(years).toString().at(-1);
  const dayLastDigit = Math.floor(days).toString().at(-1);
  const hourLastDigit = Math.floor(hours).toString().at(-1);
  const minuteLastDigit = Math.floor(minutes).toString().at(-1);
  if (years >= 1) {
    if (yearLastDigit === '1') {
      return `${Math.floor(years)} год назад`;
    }
    if (yearLastDigit === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(years)} года назад`;
    }
    return `${Math.floor(years)} лет назад`;
  }

  if (days >= 1) {
    if (dayLastDigit === '1') {
      return `${Math.floor(days)} день назад`;
    }
    if (dayLastDigit === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(days)} дня назад`;
    }
    return `${Math.floor(days)} дней назад`;
  }

  if (hours >= 1) {
    if (hourLastDigit === '1') {
      return `${Math.floor(hours)} час назад`;
    }
    if (hourLastDigit === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(hours)} часа назад`;
    }
    return `${Math.floor(hours)} часов назад`;
  }

  if (minutes >= 1) {
    if (minuteLastDigit === '1') {
      return `${Math.floor(minutes)} минуту назад`;
    }
    if (minuteLastDigit === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(minutes)} минуты назад`;
    }
    return `${Math.floor(minutes)} минут назад`;
  }
  return '1 минуту назад';
}
