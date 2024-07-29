import { assert } from 'chai';
import convertTime from '../public/assets/converttime.js';

describe('Функция проверки времени с момента публикации', function () {
    it('1 минуту назад', function () {
        const expectedResult = '1 минуту назад';
        const result = convertTime(new Date("2024-01-01T13:00:00Z"), new Date("2024-01-01T13:01:00Z"));
        assert.equal(expectedResult, result);
    });
    it('42 минуты назад', function () {
        const expectedResult = '42 минуты назад';
        const result = convertTime(new Date("2024-01-01T13:00:00Z"), new Date("2024-01-01T13:42:00Z"));
        assert.equal(expectedResult, result);
    });
    it('55 минут назад', function () {
        const expectedResult = '55 минут назад';
        const result = convertTime(new Date("2024-01-01T12:55:00Z"), new Date("2024-01-01T13:50:00Z"));
        assert.equal(expectedResult, result);
    });
    it('21 час назад', function () {
        const expectedResult = '21 час назад';
        const result = convertTime(new Date("2024-01-01T00:55:00Z"), new Date("2024-01-01T21:59:00Z"));
        assert.equal(expectedResult, result);
    });
    it('22 часа назад', function () {
        const expectedResult = '22 часа назад';
        const result = convertTime(new Date("2023-12-31T23:55:00Z"), new Date("2024-01-01T21:59:00Z"));
        assert.equal(expectedResult, result);
    });
    it('15 часов назад', function () {
        const expectedResult = '15 часов назад';
        const result = convertTime(new Date("2023-12-31T23:00:00Z"), new Date("2024-01-01T14:59:00Z"));
        assert.equal(expectedResult, result);
    });
    it('1 день назад', function () {
        const expectedResult = '1 день назад';
        const result = convertTime(new Date("2023-12-31T23:00:00Z"), new Date("2024-01-01T23:00:01Z"));
        assert.equal(expectedResult, result);
    });
    it('122 дня назад', function () {
        const expectedResult = '122 дня назад';
        const result = convertTime(new Date("2023-10-31T20:00:00Z"), new Date("2024-03-01T22:00:01Z"));
        assert.equal(expectedResult, result);
    });
    it('355 дней назад', function () {
        const expectedResult = '355 дней назад';
        const result = convertTime(new Date("2023-10-31T11:00:00Z"), new Date("2024-10-21T10:00:01Z"));
        assert.equal(expectedResult, result);
    });
    it('1 год назад', function () {
        const expectedResult = '1 год назад';
        const result = convertTime(new Date("2023-10-31T11:00:00Z"), new Date("2024-10-31T10:00:01Z"));
        assert.equal(expectedResult, result);
    });
    it('3 года назад', function () {
        const expectedResult = '3 года назад';
        const result = convertTime(new Date("2021-10-31T11:00:00Z"), new Date("2024-10-31T10:00:01Z"));
        assert.equal(expectedResult, result);
    });
    it('5 лет назад', function () {
        const expectedResult = '5 лет назад';
        const result = convertTime(new Date("1999-10-31T11:00:00Z"), new Date("2004-10-31T10:00:01Z"));
        assert.equal(expectedResult, result);
    });
});
