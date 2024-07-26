export default function postSize(message) {
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
          messageArr.splice(i, 1);
        } else {
          // ищем конец ссылки в элементе массива
          for (let z = 1; z <= messageArr[i].length; z += 1) {
            lastChar = messageArr[i].charCodeAt(messageArr[i].length - z);
            if ((lastChar >= 48 && lastChar <= 57) || (lastChar >= 65 && lastChar <= 90)
            || (lastChar >= 97 && lastChar <= 122)) {
              // удаляем ссылку из элемента массива, оставляем часть строки после ссылки
              messageArr.splice(i, 1, messageArr[i].slice(-z + 1));
            }
          }
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
          messageArr.splice(i, 1, messageArr[i].slice(0, linkPos));
        } else {
          // ищем конец ссылки в элементе массива
          for (let y = 1; y <= messageArr[i].length; y += 1) {
            lastChar = messageArr[i].charCodeAt(messageArr[i].length - y);
            if ((lastChar >= 48 && lastChar <= 57) || (lastChar >= 65 && lastChar <= 90)
            || (lastChar >= 97 && lastChar <= 122)) {
              // удаляем ссылку из строки, оставляем части строки до и после ссылки
              const stringCut = `${messageArr[i].slice(0, linkPos)}${messageArr[i].slice(-y + 1)}`;
              messageArr.splice(i, 1, stringCut);
            }
          }
        }
      }
    }
  }
  return messageArr.join(' ').length;
}
