export default function highlightHashtags(text) {
  const textArr = text.split(' ');
  for (let i = 0; i < textArr.length; i += 1) {
    // проверяем есть ли хештег в слове
    if (textArr[i].includes('#')) {
      // знак препинания (для кейса, когда между словом с хештегом и знаком пропущен пробел)
      const puncMark = textArr[i].at(-1);
      // проверяем кейс, когда пропущен пробел после предыдущего слова
      if (textArr[i][0] === '#') {
        // проверяем кейс, когда после слова с хештегом знак препинания без пробела
        if (textArr[i].at(-1).endsWith('.') || textArr[i].at(-1).endsWith(',') || textArr[i].at(-1).endsWith(';') || textArr[i].at(-1).endsWith('?') || textArr[i].at(-1).endsWith('!')) {
          // удаляем хештег и знак препинания для ссылки
          const link = textArr[i].slice(1).slice(0, -1);
          // удаляем знак препинания для текста ссылки
          const linkText = textArr[i].slice(0, -1);
          const replaceText = `<a href="/search?tag=${link}">${linkText}</a>${puncMark}`;
          textArr.splice(i, 1, replaceText);
        } else {
          const link = textArr[i].slice(1);
          const linkText = textArr[i];
          const replaceText = `<a href="/search?tag=${link}">${linkText}</a>`;
          textArr.splice(i, 1, replaceText);
        }
      } else {
        // кейс когда хештег не первый элемент в слове
        const hashPos = textArr[i].indexOf('#');
        const textBeforeHash = textArr[i].slice(0, hashPos);
        // проверяем кейс, когда после слова с хештегом знак препинания без пробела
        if (textArr[i].at(-1).endsWith('.') || textArr[i].at(-1).endsWith(',') || textArr[i].at(-1).endsWith(';') || textArr[i].at(-1).endsWith('?') || textArr[i].at(-1).endsWith('!')) {
          const link = textArr[i].slice(hashPos + 1).slice(0, -1);
          const linkText = textArr[i].slice(hashPos).slice(0, -1);
          const replaceText = `${textBeforeHash}<a href="/search?tag=${link}">${linkText}</a>${puncMark}`;
          textArr.splice(i, 1, replaceText);
        } else {
          const link = textArr[i].slice(hashPos + 1);
          const linkText = textArr[i].slice(hashPos);
          const replaceText = `${textBeforeHash}<a href="/search?tag=${link}">${linkText}</a>`;
          textArr.splice(i, 1, replaceText);
        }
      }
    }
  }
  return textArr.join(' ');
}
