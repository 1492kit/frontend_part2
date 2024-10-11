import { assert } from 'chai';
import highlightHashtags from '../public/assets/highlighthashtags.js';

describe('Функция замены хэштега на ссылку', function () {
    it('без хэштега', function () {
      const expectedResult = 'Всем привет!';
      const result = highlightHashtags('Всем привет!');
      assert.equal(expectedResult, result);
    });
    it('один хэштег в конце сообщения', function () {
      const expectedResult ='Всем привет! Кто еще изучает <a href="/search?tag=javascript">#javascript</a> ?';
      const result = highlightHashtags('Всем привет! Кто еще изучает #javascript ?');
      assert.equal(expectedResult, result);
    });
    it('один хэштег вначале сообщения', function () {
      const expectedResult = '<a href="/search?tag=javascript">#javascript</a> кто-то еще изучает, кроме меня?';
      const result = highlightHashtags('#javascript кто-то еще изучает, кроме меня?');
      assert.equal(expectedResult, result);
    });
    it('два хэштега', function () {
      const expectedResult = '<a href="/search?tag=javascript">#javascript</a> кто-то еще изучает? Или может <a href="/search?tag=php">#php</a> ?';
      const result = highlightHashtags('#javascript кто-то еще изучает? Или может #php ?');
      assert.equal(expectedResult, result);
    });    
    it('пустое сообщение', function () {
      const expectedResult = '';
      const result = highlightHashtags('');
      assert.equal(expectedResult, result);
    });
    it('пропущен пробел между хэштегом и предыдщим словом', function () {
      const expectedResult = 'Всем привет! Кто еще изучает<a href="/search?tag=javascript">#javascript</a> ?';
      const result = highlightHashtags('Всем привет! Кто еще изучает#javascript ?');
      assert.equal(expectedResult, result);
    });
    it('после слова с хештегом знак препинания без пробела ', function () {
      const expectedResult = 'Всем привет! Кто еще изучает <a href="/search?tag=javascript">#javascript</a>?';
      const result = highlightHashtags('Всем привет! Кто еще изучает #javascript?');
      assert.equal(expectedResult, result);
    });   
  });
  