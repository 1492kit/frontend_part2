import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', function () {
  it('без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });
  it('одна ссылка https в конце сообщения', function () {
    const expectedResult = 33;
    const result = postSize('Всем привет! Заходите на мой сайт https://mysite.com');
    assert.equal(expectedResult, result);
  });
  it('одна ссылка http вначале сообщения', function () {
    const expectedResult = 33;
    const result = postSize('http://mysite.com Всем привет! Заходите на мой сайт');
    assert.equal(expectedResult, result);
  });
  it('одна ссылка www в середине сообщения', function () {
    const expectedResult = 49;
    const result = postSize('Всем привет! Заходите на мой сайт www.mysite.com и ставьте лайки');
    assert.equal(expectedResult, result);
  });
  it('три ссылки', function () {
    const expectedResult = 58;
    const result = postSize('https://mysite.com Всем привет! Заходите на мой сайт www.mysite.com или на еще один мой сайт http://mysite2.com');
    assert.equal(expectedResult, result);
  });
  it('сообщение без ссылок с email', function () {
    const expectedResult = 45;
    const result = postSize('Всем привет! Пишите на почту mymail@gmail.com');
    assert.equal(expectedResult, result);
  });  
  it('пустое сообщение', function () {
    const expectedResult = 0;
    const result = postSize('');
    assert.equal(expectedResult, result);
  });
  it('ссылка с ошибкой', function () {
    const expectedResult = 51;
    const result = postSize('Всем привет! Заходите на мой сайт https:/mysite.com');
    assert.equal(expectedResult, result);
  });
  it('пропущен пробел между ссылкой и текстом', function () {
    const expectedResult = 60;
    const result = postSize('Всем привет! Заходите на мой сайт https://mysite.com, или на еще один мой сайтhttps://mysite2.com');
    assert.equal(expectedResult, result);
  });
  it('ссылка без http, https или www', function () {
    const expectedResult = 44;
    const result = postSize('Всем привет! Заходите на мой сайт mysite.com');
    assert.equal(expectedResult, result);
  });
  it('ссылка с субдоменом', function () {
    const expectedResult = 58;
    const result = postSize('Всем привет! Заходите на мой сайт https://thebest.mysite.com или на еще один мой сайт www.thebestmysite2.com');
    assert.equal(expectedResult, result);
  });
});
