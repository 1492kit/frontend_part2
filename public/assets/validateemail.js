export default function validateEmail(email) {
  // проверка на пробелы
  if (email.includes(' ')) {
    return false;
  }
  // проверка на наличие @
  if (email.includes('@')) {
    // проверка, что @ не в начале или конце строки
    if (email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
      return false;
    }
    // проверка, что @ одна
    if (email.includes('@', email.indexOf('@') + 1)) {
      return false;
    }
    // получаем часть строки до @
    const localPart = email.slice(0, email.indexOf('@'));
    // проверка на наличие '.'
    if (localPart.includes('.')) {
      // проверка, что '.' не в начале или конце строки
      if (localPart.indexOf('.') === 0 || localPart.indexOf('.') === localPart.length - 1) {
        return false;
      }
      // проверка, что '.' не идут подряд
      if (localPart[localPart.indexOf('.') + 1] === '.') {
        return false;
      }
    }
    // получаем часть строки после @
    const domen = email.slice(email.indexOf('@') + 1);
    // проверка на наличие '.'
    if (domen.includes('.')) {
      // проверка, что '.' не в начале или конце строки
      if (domen.indexOf('.') === 0 || domen.indexOf('.') === domen.length - 1) {
        return false;
      }
      // проверка, что '.' не идут подряд
      if (domen[domen.indexOf('.') + 1] === '.') {
        return false;
      }
    } else {
      return false;
    }
    return true;
  }
  return false;
}
