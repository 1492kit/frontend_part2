export default function linkReplace(message) {
  const messageArr = message.split(' ');
  for (let i = 0; i < messageArr.length; i += 1) {
    // ищем ссылки в элементах массива
    if (messageArr[i].includes('http://') || messageArr[i].includes('https://') || messageArr[i].includes('www.')) {
      // проверяем, начинается ли элемент с ссылки
      if (messageArr[i].startsWith('http://') || messageArr[i].startsWith('https://') || messageArr[i].startsWith('www.')) {
        // проверяем заканчивается ли строка на символ, допустимый в доменах верхнего уровня
        let lastChar = messageArr[i].charCodeAt(messageArr[i].length - 1);
        if ((lastChar >= 48 && lastChar <= 57) || (lastChar >= 65 && lastChar <= 90)
          || (lastChar >= 97 && lastChar <= 122)) {
          const link = messageArr[i];
          // удаляем префикс ссылки
          let linkText;
          if (messageArr[i].includes('http://')) {
            linkText = messageArr[i].slice(7);
          } else if (messageArr[i].includes('https://')) {
            linkText = messageArr[i].slice(8);
          } else if (messageArr[i].includes('www.')) {
            linkText = messageArr[i].slice(4);
          }
          const replaceText = `<a href="${link}">${linkText}</a>`;
          messageArr.splice(i, 1, replaceText);
        } else {
          // ищем конец ссылки в элементе массива
          const { length } = messageArr[i];
          let linkEndPos;
          for (let z = 2; z <= length; z += 1) {
            lastChar = messageArr[i].charCodeAt(length - z);
            if ((lastChar >= 48 && lastChar <= 57) || (lastChar >= 65 && lastChar <= 90)
              || (lastChar >= 97 && lastChar <= 122)) {
              linkEndPos = length - z;
              z = length;
            }
          }
          const afterLinkText = messageArr[i].slice(linkEndPos + 1);
          const link = messageArr[i].slice(0, linkEndPos + 1);
          // удаляем префикс ссылки и лишний текст после
          let linkText;
          if (messageArr[i].includes('http://')) {
            linkText = messageArr[i].slice(7, linkEndPos + 1);
          } else if (messageArr[i].includes('https://')) {
            linkText = messageArr[i].slice(8, linkEndPos + 1);
          } else if (messageArr[i].includes('www.')) {
            linkText = messageArr[i].slice(4, linkEndPos + 1);
          }
          const replaceText = `<a href="${link}">${linkText}</a>${afterLinkText}`;
          messageArr.splice(i, 1, replaceText);
        }
      } else {
        // ищем позицию ссылки в случае, когда есть текст перед ссылкой в элементе массива
        let linkPos;
        if (messageArr[i].includes('http://')) {
          linkPos = messageArr[i].indexOf('http://');
        } else if (messageArr[i].includes('https://')) {
          linkPos = messageArr[i].indexOf('https://');
        } else if (messageArr[i].includes('www.')) {
          linkPos = messageArr[i].indexOf('www.');
        }
        // проверяем заканчивается ли строка на символ, допустимый в доменах верхнего уровня
        let lastChar = messageArr[i].charCodeAt(messageArr[i].length - 1);
        if ((lastChar >= 48 && lastChar <= 57) || (lastChar >= 65 && lastChar <= 90)
          || (lastChar >= 97 && lastChar <= 122)) {
          // удаляем префикс ссылки и лишний текст перед ней
          const link = messageArr[i].slice(linkPos);
          const beforeLinkText = messageArr[i].slice(0, linkPos);
          let linkText;
          if (messageArr[i].includes('http://')) {
            linkText = messageArr[i].slice(linkPos + 7);
          } else if (messageArr[i].includes('https://')) {
            linkText = messageArr[i].slice(linkPos + 8);
          } else if (messageArr[i].includes('www.')) {
            linkText = messageArr[i].slice(linkPos + 4);
          }
          const replaceText = `${beforeLinkText}<a href="${link}">${linkText}</a>`;
          messageArr.splice(i, 1, replaceText);
        } else {
          // ищем конец ссылки в элементе массива
          const { length } = messageArr[i];
          let linkEndPos;
          for (let y = 2; y <= length; y += 1) {
            lastChar = messageArr[i].charCodeAt(length - y);
            if ((lastChar >= 48 && lastChar <= 57) || (lastChar >= 65 && lastChar <= 90)
              || (lastChar >= 97 && lastChar <= 122)) {
              linkEndPos = length - y;
              y = length;
            }
          }
          const beforeLinkText = messageArr[i].slice(0, linkPos);
          const afterLinkText = messageArr[i].slice(linkEndPos + 1);
          const link = messageArr[i].slice(linkPos, linkEndPos + 1);
          // удаляем префикс ссылки и лишний текст после
          let linkText;
          if (messageArr[i].includes('http://')) {
            linkText = messageArr[i].slice(linkPos + 7, linkEndPos + 1);
          } else if (messageArr[i].includes('https://')) {
            linkText = messageArr[i].slice(linkPos + 8, linkEndPos + 1);
          } else if (messageArr[i].includes('www.')) {
            linkText = messageArr[i].slice(linkPos + 4, linkEndPos + 1);
          }
          const replaceText = `${beforeLinkText}<a href="${link}">${linkText}</a>${afterLinkText}`;
          messageArr.splice(i, 1, replaceText);
        }
      }
    }
  }
  return messageArr.join(' ');
}
