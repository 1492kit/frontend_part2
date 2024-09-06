import { assert } from 'chai';
import linkReplace from '../public/assets/linkreplace.js';

describe('Функция замены ссылок на HTML-код', function () {
  it('без ссылок', function () {
    const expectedResult = 'Всем привет!';
    const result = linkReplace('Всем привет!');
    assert.equal(expectedResult, result);
  });
  it('одна ссылка https в конце сообщения', function () {
    const expectedResult = 'Всем привет! Заходите на мой сайт <a href="https://mysite.com">mysite.com</a>';
    const result = linkReplace('Всем привет! Заходите на мой сайт https://mysite.com');
    assert.equal(expectedResult, result);
  });
  it('одна ссылка http вначале сообщения', function () {
    const expectedResult = '<a href="http://mysite.com">mysite.com</a> Всем привет! Заходите на мой сайт';
    const result = linkReplace('http://mysite.com Всем привет! Заходите на мой сайт');
    assert.equal(expectedResult, result);
  });
  it('одна ссылка www в середине сообщения', function () {
    const expectedResult = 'Всем привет! Заходите на мой сайт <a href="www.mysite.com">mysite.com</a> и ставьте лайки';
    const result = linkReplace('Всем привет! Заходите на мой сайт www.mysite.com и ставьте лайки');
    assert.equal(expectedResult, result);
  });
  it('три ссылки', function () {
    const expectedResult = '<a href="https://mysite.com">mysite.com</a> Всем привет! Заходите на мой сайт <a href="www.mysite.com">mysite.com</a> или на еще один мой сайт <a href="http://mysite2.com">mysite2.com</a>';
    const result = linkReplace('https://mysite.com Всем привет! Заходите на мой сайт www.mysite.com или на еще один мой сайт http://mysite2.com');
    assert.equal(expectedResult, result);
  });
  it('сообщение без ссылок с email', function () {
    const expectedResult = 'Всем привет! Пишите на почту mymail@gmail.com';
    const result = linkReplace('Всем привет! Пишите на почту mymail@gmail.com');
    assert.equal(expectedResult, result);
  });  
  it('пустое сообщение', function () {
    const expectedResult = '';
    const result = linkReplace('');
    assert.equal(expectedResult, result);
  });
  it('ссылка с ошибкой', function () {
    const expectedResult = 'Всем привет! Заходите на мой сайт https:/mysite.com';
    const result = linkReplace('Всем привет! Заходите на мой сайт https:/mysite.com');
    assert.equal(expectedResult, result);
  });
  it('пропущен пробел между ссылкой и текстом', function () {
    const expectedResult = 'Всем привет! Заходите на мой сайт<a href="https://mysite.com">mysite.com</a>, или на еще один мой сайт <a href="https://mysite2.com">mysite2.com</a>!!!';
    const result = linkReplace('Всем привет! Заходите на мой сайтhttps://mysite.com, или на еще один мой сайт https://mysite2.com!!!');
    assert.equal(expectedResult, result);
  });
  it('ссылка без http, https или www', function () {
    const expectedResult = 'Всем привет! Заходите на мой сайт mysite.com';
    const result = linkReplace('Всем привет! Заходите на мой сайт mysite.com');
    assert.equal(expectedResult, result);
  });
  it('ссылка с субдоменом', function () {
    const expectedResult = 'Всем привет! Заходите на мой сайт <a href="https://thebest.mysite.com">thebest.mysite.com</a> или на еще один мой сайт <a href="www.thebestmysite2.com">thebestmysite2.com</a>';
    const result = linkReplace('Всем привет! Заходите на мой сайт https://thebest.mysite.com или на еще один мой сайт www.thebestmysite2.com');
    assert.equal(expectedResult, result);
  });
});
