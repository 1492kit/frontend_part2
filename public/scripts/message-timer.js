import convertTime from '../assets/converttime.js';

async function messageTimer() {
  const urlMess = 'https://burtovoy.github.io/messages.json';
  const responseMess = await fetch(urlMess);
  const messages = await responseMess.json();
  if (messages) {
    messages.messages.forEach((message) => {
      const postDate = (() => {
        const [datePart, timePart] = message.date.split(' ');
        const [day, month, year] = datePart.split('.').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);
        return new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
      })();
      const currentDate = new Date();
      const convertedTime = convertTime(postDate, currentDate);
      const timeElement = document.querySelector(`#id${message.id} .time`);
      timeElement.innerHTML = `<p>${convertedTime}</p>`;
    });
  }
}
setInterval(messageTimer, 3000);
