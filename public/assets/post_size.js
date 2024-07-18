export default function postSize(message) {
  const regexp = /[-.\w]+:\/\/([\w-]+\.)+[\w-]+|www.([\w-]+\.)+[\w-]+/g;
  return message.replace(regexp, '').length;
}
