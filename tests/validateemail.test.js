import { assert } from 'chai';
import validateEmail from '../public/assets/validateemail.js';

describe('Функция валидации email', function () {
  it('пустая строка', function () {
    const expectedResult = false;
    const result = validateEmail('');
    assert.equal(expectedResult, result);
  });
  it('валидный email', function () {
    const expectedResult = true;
    const result = validateEmail('example@example.com');
    assert.equal(expectedResult, result);
  });
  it('email содержит пробелы', function () {
    const expectedResult = false;
    const result = validateEmail('example @example.com');
    assert.equal(expectedResult, result);
  });
  it('отсутствует символ @', function () {
    const expectedResult = false;
    const result = validateEmail('exampleexample.com');
    assert.equal(expectedResult, result);
  });
  it('символ @ первый или последний в email', function () {
    const expectedResult = false;
    const result = validateEmail('example@');
    assert.equal(expectedResult, result);
  });
  it('более одного символа @', function () {
    const expectedResult = false;
    const result = validateEmail('exa@mple@example.com');
    assert.equal(expectedResult, result);
  });
  it('валидный email c точкой в local part', function () {
    const expectedResult = true;
    const result = validateEmail('name.example@example.com');
    assert.equal(expectedResult, result);
  });  
  it('в local part две точки подряд', function () {
    const expectedResult = false;
    const result = validateEmail('name..example@example.com');
    assert.equal(expectedResult, result);
  });
  it('в local part точка вначале или вконце', function () {
    const expectedResult = false;
    const result = validateEmail('.example@example.com');
    assert.equal(expectedResult, result);
  });
  it('в домене нет точки', function () {
    const expectedResult = false;
    const result = validateEmail('example@examplecom');
    assert.equal(expectedResult, result);
  });
  it('в домене точки идут подряд', function () {
    const expectedResult = false;
    const result = validateEmail('example@example..com');
    assert.equal(expectedResult, result);
  });
  it('в домене точка вначале или вконце', function () {
    const expectedResult = false;
    const result = validateEmail('example@.example.com');
    assert.equal(expectedResult, result);
  });
});
