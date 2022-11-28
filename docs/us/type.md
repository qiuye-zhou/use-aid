---
title: Type
---

# Type

```ts
import { Ref } from 'vue';

/**
 * Media query to determine whether the browser is in the current condition
 * @param value Must be of type Ref<number> | number
 * @param type Must be 'max' or 'min' Ref<string> | string
 * @returns Whether it is in the judging state( true || false ) Ref<boolean>
 */
declare const useMedia: (value?: Ref<number> | number, type?: Ref<string> | string) => Ref<boolean>;

type storageType = {
    'key': string;
    'val': any;
};
type LocalStorageType = {
    set: (key: string, value: any) => void;
    get: (key: string) => any;
    getForIndex: (index: number) => string | null;
    getKeys: () => string[];
    getLength: () => number;
    getAll: () => storageType[];
    remove: (key: string) => void;
    removeAll: () => void;
};
/**
 *
 * @returns LocalStorage
 */
declare const useLocalStorage: () => LocalStorageType;

export { LocalStorageType, storageType, useLocalStorage, useMedia };
```