export default function postSize(message) {
  const messageArr = message.split(' ');
  for (let i = 0; i < messageArr.length; i += 1) {
    if (messageArr[i].startsWith('http://') || messageArr[i].startsWith('https://') || messageArr[i].startsWith('www.')) {
      messageArr.splice(i, 1);
    }
  }
  return messageArr.join(' ').length;
}
