/* eslint-disable unicorn/prefer-date-now */
import { useDateFormat, normalized, formatdate } from '.';
import {
    describe, expect, it
} from 'vitest';

describe('useDateFormat', () => {
    it('should export module', () => {
        expect(normalized).toBeDefined();
        expect(formatdate).toBeDefined();
        expect(useDateFormat).toBeDefined();
    });
    it('test normalized', () => {
        const date = new Date(2022, 0, 1, 0, 0, 0);
        const currentDate = new Date().getTime();
        const currentDateres = new Date(currentDate);
        const currtets = Date.now();
        const currtetsres = new Date(currtets);

        expect(normalized(date)).toEqual(new Date(date));
        expect(normalized(currentDate)).toEqual(currentDateres);
        expect(normalized(currtets)).toEqual(currtetsres);
        expect(normalized(`${currentDate}`)).toEqual(currentDateres);
    });

    it('test formatdate', () => {
        expect(useDateFormat(new Date('2022-11-11 10:22:00')).value).toBe('10:22');
        expect(useDateFormat(new Date('2022-11-11 10:22:00'), 'YYYY').value).toBe('2022');
        expect(useDateFormat(new Date('2022-11-11 10:22:00'), 'YYYY|MM-DD').value).toBe('2022|11-11');
        expect(useDateFormat(new Date('2022-11-11 10:22:00'), 'YYYY-MM-DD-HH-mm-ss-SSS-d').value).toBe('2022-11-11-10-22-00-000-5');
        expect(useDateFormat(new Date('2022-11-11 10:22:00'), 'M-D-H-m-s').value).toBe('11-11-10-22-0');
    });
});

describe('test formatStr', () => {
    it.each([
        { dateStr: '2022-01-01 06:05:05', formatStr: 'HH:m:ss', expected: '06:5:05' },
        { dateStr: '2022-01-01 06:05:05', formatStr: 'HH:m:ss', expected: '06:5:05' },
        { dateStr: '2022-01-01 06:05:05', formatStr: 'HH:m:ss', expected: '06:5:05' },
        { dateStr: '2022-01-01 06:05:05', formatStr: 'HH:m:ss', expected: '06:5:05' }
    ])('test formatStr', ({ dateStr, formatStr, expected }) => {
        expect(useDateFormat(new Date(dateStr), formatStr).value).toBe(expected);
    });
});
