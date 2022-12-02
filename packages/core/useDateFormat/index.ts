/* eslint-disable no-unused-vars */
import { computed, Ref, unref } from 'vue';

export type DateType = Date | string | number

const DATE_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS/g;

export const formatdate = (date: Date, formatstr: string) => {
    const years = date.getFullYear();
    const month = date.getMonth() + 1;
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const day = date.getDay();
    const matches: Record<string, () => string | number> = {
        YYYY: () => years,
        M: () => month,
        MM: () => `${month}`.padStart(2, '0'),
        D: () => days,
        DD: () => `${days}`.padStart(2, '0'),
        H: () => hours,
        HH: () => `${hours}`.padStart(2, '0'),
        m: () => minutes,
        mm: () => `${minutes}`.padStart(2, '0'),
        s: () => seconds,
        ss: ()=> `${seconds}`.padStart(2, '0'),
        SSS: () => `${milliseconds}`.padStart(3, '0'),
        d: () => day
    };

    return formatstr.replaceAll(DATE_FORMAT, (match, $1) => $1 || matches[match]());
};

export const normalized = (date: DateType) => {
    if (date instanceof Date) {
        return new Date(date);
    }
    if ((typeof date === 'number') && date.toString().length === 13) {
        return new Date(date);
    }
    if ((typeof date === 'string') && /\d{13}/.test(date)) {
        return new Date(JSON.parse(date));
    }
    throw new Error('Incorrect format');
};

/**
 *
 * @param date new Date() => Date 对象 | (new Date().geTime() | Date.now()) => 传入一个时间的格林威治时间数值
 * @param formatstr 匹配格式
 * @returns
 */
export const useDateFormat = (date: DateType, formatstr: string | Ref = 'HH:mm') => {
    return computed(() => formatdate(normalized(date), unref(formatstr)));
};
