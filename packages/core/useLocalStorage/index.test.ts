/* eslint-disable camelcase */
import { useLocalStorage } from '.';
import {
    describe, expect, expectTypeOf, it
} from 'vitest';

describe('useLocalStorage methods', () => {
    const local = useLocalStorage();

    it('set', () => {
        expect(local.set('key1', 'value1')).toBeUndefined();
        expect(local.set('key2', 'value2')).toBeUndefined();
    });

    it('get', () => {
        expect(local.get('key1')).toBe('value1');
    });

    it('getforindex', () => {
        expect(local.getForIndex(0)).toBe('key1');
    });

    it('getKeys return type', () => {
        expectTypeOf(local.getKeys()).toBeArray();
    });

    it('getKeys return keys', () => {
        expect(local.getKeys()).toStrictEqual(['key1', 'key2']);
    });

    it('getLength', () => {
        expect(local.getLength()).toBe(2);
    });

    const test_getAll_value = [
        {
            key: 'key1',
            val: 'value1'
        },
        {
            key: 'key2',
            val: 'value2'
        }
    ];

    it('getAll', () => {
        expect(local.getAll()).toStrictEqual(test_getAll_value);
    });

    it('remove', () => {
        expect(local.remove('key1')).toBeUndefined();
    });

    const test_getAll_value2 = [
        {
            key: 'key2',
            val: 'value2'
        }
    ];

    it('getAll', () => {
        expect(local.getAll()).toStrictEqual(test_getAll_value2);
    });

    it('removeAll', () => {
        expect(local.removeAll()).toBeUndefined();
    });

    const test_getAll_value3: any[] = [
    ];

    it('getAll', () => {
        expect(local.getAll()).toStrictEqual(test_getAll_value3);
    });

    it('getLength', () => {
        expect(local.getLength()).toBe(0);
    });
});
