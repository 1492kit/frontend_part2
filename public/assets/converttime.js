export default function convertTime(postDate, currentDate) {
  const timeDifference = currentDate - postDate;
  const years = timeDifference / 31536000000;
  if (years >= 1) {
    if (Math.floor(years).toString().at(-1) === '1') {
      return `${Math.floor(years)} год назад`;
    }
    if (Math.floor(years).toString().at(-1) === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(years)} года назад`;
    }
    return `${Math.floor(years)} лет назад`;
  }

  const days = timeDifference / 86400000;
  if (days >= 1) {
    if (Math.floor(days).toString().at(-1) === '1') {
      return `${Math.floor(days)} день назад`;
    }
    if (Math.floor(days).toString().at(-1) === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(days)} дня назад`;
    }
    return `${Math.floor(days)} дней назад`;
  }

  const hours = timeDifference / 3600000;
  if (hours >= 1) {
    if (Math.floor(hours).toString().at(-1) === '1') {
      return `${Math.floor(hours)} час назад`;
    }
    if (Math.floor(hours).toString().at(-1) === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(hours)} часа назад`;
    }
    return `${Math.floor(hours)} часов назад`;
  }

  const minutes = timeDifference / 60000;
  if (minutes >= 1) {
    if (Math.floor(minutes).toString().at(-1) === '1') {
      return `${Math.floor(minutes)} минуту назад`;
    }
    if (Math.floor(minutes).toString().at(-1) === '2' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '3' || Math.floor(timeDifference / 31536000000).toString().at(-1) === '4') {
      return `${Math.floor(minutes)} минуты назад`;
    }
    return `${Math.floor(minutes)} минут назад`;
  }
  return '1 минуту назад';
}
