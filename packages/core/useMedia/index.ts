import { tryOnScopeDispose } from '../../shared';
import {
    Ref, ref, unref, watchEffect
} from 'vue';
import { defaultWindow } from '../../config';

/**
 * Media query to determine whether the browser is in the current condition
 * @param value Must be of type Ref<number> | number
 * @param type Must be 'max' or 'min' Ref<string> | string
 * @returns Whether it is in the judging state( true || false ) Ref<boolean>
 */
export const useMedia = (value: Ref<number> | number = 768, type: Ref<string> | string = 'max') => {
    const window = defaultWindow;
    if (typeof unref(value) !== 'number') throw new Error('The value type should be number');

    if (unref(type) !== 'max' && unref(type) !== 'min') throw new Error('Type should be max or min');

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

        mediaQuery = window.matchMedia(`(${unref(type)}-width: ${unref(value)}px)`);
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
