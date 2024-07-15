import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', function () {
  it('без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });
  it('одна ссылка', function () {
    const expectedResult = 34;
    const result = postSize('Всем привет! Заходите на мой сайт https://mysite.com');
    assert.equal(expectedResult, result);
  });
  it('две ссылки', function () {
    const expectedResult = 60;
    const result = postSize('Всем привет! Заходите на мой сайт https://mysite.com или на еще один мой сайт https://mysite2.com');
    assert.equal(expectedResult, result);
  });
  it('сообщение без ссылок с email', function () {
    const expectedResult = 45;
    const result = postSize('Всем привет! Пишите на почту mymail@gmail.com');
    assert.equal(expectedResult, result);
  });
  it('ссылки с http и www', function () {
    const expectedResult = 72;
    const result = postSize('Всем привет! Заходите на мой сайт http://mysite.com или на еще один мой сайт https://www.mysite2.com или еще на www.mysite2.com');
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
    const expectedResult = 57;
    const result = postSize('Всем привет! Заходите на мой сайтhttps://mysite.comили на еще один мой сайтhttps://mysite2.com');
    assert.equal(expectedResult, result);
  });
  it('ссылка без http, https или www', function () {
    const expectedResult = 44;
    const result = postSize('Всем привет! Заходите на мой сайт mysite.com');
    assert.equal(expectedResult, result);
  });
  it('ссылка с субдоменом', function () {
    const expectedResult = 60;
    const result = postSize('Всем привет! Заходите на мой сайт https://thebest.mysite.com или на еще один мой сайт www.thebestmysite2.com');
    assert.equal(expectedResult, result);
  });
});