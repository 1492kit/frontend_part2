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
  const messagesDiv = document.querySelector('.messages-list');
  const feedUl = document.querySelector('.feed');

  if (messages) {
    messagesDiv.classList.remove('is-hidden');
    messages.messages.forEach((message) => {
      const listItem = document.createElement('li');
      listItem.classList.add('post-border');

      listItem.innerHTML = `
    <li class="post-border">
    <div class="post" id="${message.id}">
      <div class="avatar" id="${message.user_id}">
        <img src="" alt="Аватар">
      </div>

      <div class="post-header">
        <div class="user">
          <p class="user-name">${message.name}</p>
          <p class="user-account">${message.mail}</p>
        </div>

        <div class="time">
          <p>${message.date}</p>
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
      if (avatar.id === picture.user_id) {
        img.setAttribute('src', picture.url);
      }
    });
  });
}

apiData();
