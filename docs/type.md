---
title: 类型
---

# 类型

```ts
import * as vue from 'vue';
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

/**
 *
 * @param document
 */
declare const useDocumentVisibility: (document?: Document | undefined) => Ref<DocumentVisibilityState>;

type DateType = Date | string | number;
declare const formatdate: (date: Date, formatstr: string) => string;
declare const normalized: (date: DateType) => Date;
/**
 *
 * @param date new Date() => Date 对象 | (new Date().geTime() | Date.now()) => 传入一个时间的格林威治时间数值
 * @param formatstr 匹配格式
 * @returns
 */
declare const useDateFormat: (date: DateType, formatstr?: string | Ref) => vue.ComputedRef<string>;

export { DateType, LocalStorageType, formatdate, normalized, storageType, useDateFormat, useDocumentVisibility, useLocalStorage, useMedia };
```