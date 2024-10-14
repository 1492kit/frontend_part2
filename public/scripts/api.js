import convertTime from '../assets/converttime.js';

async function apiData() {
  const urlStat = 'https://burtovoy.github.io/statistic.json';
  const responseStat = await fetch(urlStat);
  const statistics = await responseStat.json();

  const users = document.querySelector('#users');
  const usersRegTitile = document.querySelector('#usersRegTitle');
  const writMessages = document.querySelector('#writMessages');
  const writMessagesTitle = document.querySelector('#writMessagesTitle');
  const writToday = document.querySelector('#writToday');
  const writTodayTitle = document.querySelector('#writTodayTitle');
  const statisticsDiv = document.querySelector('.statistics');

  if (statistics) {
    statisticsDiv.classList.remove('is-hidden');
    if (statistics.statistic.usersRegistr) {
      users.innerHTML = `${statistics.statistic.usersRegistr}`;
      usersRegTitile.innerHTML = 'Пользователей зарегистрировано';
    }
    if (statistics.statistic.writMessages) {
      writMessages.innerHTML = `${statistics.statistic.writMessages}`;
      writMessagesTitle.innerHTML = 'Сообщений<br>написано';
    }
    if (statistics.statistic.writToday) {
      writToday.innerHTML = `${statistics.statistic.writToday}`;
      writTodayTitle.innerHTML = 'Написано<br>сегодня';
    }
  }

  const urlMess = 'https://burtovoy.github.io/messages.json';
  const responseMess = await fetch(urlMess);
  const messages = await responseMess.json();
  const feedUl = document.querySelector('.feed');
  const feedFrames = document.querySelectorAll('.post-border-frame');

  if (messages) {
    feedFrames.forEach((feedFrame) => {
      feedFrame.setAttribute('style', 'display: none;');
    });
    messages.messages.forEach((message) => {
      const postDate = (() => {
        const [datePart, timePart] = message.date.split(' ');
        const [day, month, year] = datePart.split('.').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);
        return new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
      })();
      const currentDate = new Date();
      const convertedTime = convertTime(postDate, currentDate);
      const listItem = document.createElement('li');
      listItem.classList.add('post-border');

      listItem.innerHTML = `
    <li class="post-border">
    <div class="post" id="id${message.id}">
      <div class="avatar" id="id${message.user_id}">
        <img src="" alt="Аватар">
      </div>

      <div class="post-header">
        <div class="user">
          <p class="user-name">${message.name}</p>
          <p class="user-account">${message.mail}</p>
        </div>

        <div class="time">
          <p>${convertedTime}</p>
        </div>
      </div>

      <div class="message">
        <p>${message.message}</p>
        <div class="post-stats">
          <div class="post-stats-item">
            <img src="images&#92;reply.png" alt="Иконка ответа">
            <p>${message.quantityReposts}</p>
          </div>

          <div class="post-stats-item">
            <img src="images&#92;like.png" alt="Иконка сердечко">
            <p>${message.quantityLike}</p>
          </div>

          <div class="post-stats-item">
            <img src="images&#92;share.png" alt="Иконка поделиться">
            <p>${message.quantityShare}</p>
          </div>
        </div>
      </div>

    </div>
  </li>
  `;
      feedUl.insertAdjacentElement('beforeend', listItem);
    });
  }

  const urlPictures = 'https://burtovoy.github.io/pictures.json';
  const responsePictures = await fetch(urlPictures);
  const pictures = await responsePictures.json();
  const avatars = document.querySelectorAll('.avatar');
  avatars.forEach((avatar) => {
    const img = avatar.querySelector('img');
    pictures.pictures.forEach((picture) => {
      if (avatar.id === `id${picture.user_id}`) {
        img.setAttribute('src', picture.url);
      }
    });
  });
}

apiData();
