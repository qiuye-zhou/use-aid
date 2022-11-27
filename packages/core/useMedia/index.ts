import { tryOnScopeDispose } from '../../shared/tryOnScopeDispose/index';
import { Ref, ref, watchEffect } from 'vue';
import { defaultWindow } from '../../config';

/**
 * Media query to determine whether the browser is in the current condition
 * @param value Must be of type number
 * @param type Must be 'max' or 'min'
 * @returns Whether it is in the judging state( true || false )
 */
export const useMedia = (value: number = 768, type: string = 'max') => {
    const window = defaultWindow;
    if (typeof value !== 'number') throw new Error('The value type should be number');

    if (type !== 'max' && type !== 'min') throw new Error('Type should be max or min');

    if (!window) throw new Error('Non browser environment');

    const isMedia:Ref<boolean> = ref(false);
    let mediaQuery: MediaQueryList | undefined;

    const clear = () => {
        if (!mediaQuery) return;
        if ('removeEventListener' in mediaQuery) {
            // eslint-disable-next-line no-use-before-define
            mediaQuery.removeEventListener('change', handler);
        } else {
            // @ts-expect-error deprecated API
            // eslint-disable-next-line no-use-before-define
            mediaQuery.removeListener(handler);
        }
    };

    const handler = () => {
        clear();

        mediaQuery = window.matchMedia(`(${type}-width: ${value}px)`);
        isMedia.value = mediaQuery.matches;

        if ('addEventListener' in mediaQuery) {
            mediaQuery.addEventListener('change', handler);
        } else {
            // @ts-expect-error deprecated API
            mediaQuery.addListener(handler);
        }
    };

    watchEffect(handler);

    tryOnScopeDispose(() => clear());

    return isMedia;
};
