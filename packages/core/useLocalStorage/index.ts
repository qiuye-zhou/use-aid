/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { defaultWindow } from '../../config';

export type storageType = {
    'key': string
    'val': any
}

export type LocalStorageType = {
    set: (key: string, value: any) => void
    get: (key: string) => any
    getForIndex: (index: number) => string | null
    getKeys: () => string[]
    getLength: () => number
    getAll: () => storageType[]
    remove: (key: string) => void
    removeAll: () => void
}

/**
 *
 * @returns LocalStorage
 */
export const useLocalStorage = (): LocalStorageType => {
    const window = defaultWindow;

    if (!window) throw new Error('Non browser environment');

    if (!localStorage) throw new Error('localStorage does not exist');

    // eslint-disable-next-line no-use-before-define
    return new LocalStorage();
};

class LocalStorage {
    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key: string) {
        return JSON.parse(localStorage.getItem(key) || 'null');
    }

    getForIndex(index: number) {
        return localStorage.key(index);
    }

    getKeys() {
        let items = this.getAll();
        let keys: string[] = [];
        for (const item of items) {
            keys.push(item.key);
        }
        return keys;
    }

    getLength() {
        return localStorage.length;
    }

    getAll() {
        let length = localStorage.length;
        let array: storageType[] = [];

        for (let index = 0; index < length; index++) {
            let getkey = localStorage.key(index);
            let getval = JSON.parse(localStorage.getItem(getkey || `${length}`) || 'null');

            array[index] = {
                key: getkey as string,
                val: getval
            };
        }

        return array;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    removeAll() {
        localStorage.clear();
    }
}
