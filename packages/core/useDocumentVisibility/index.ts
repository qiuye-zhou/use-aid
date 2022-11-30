/* eslint-disable no-undef */
import { tryOnScopeDispose } from '../../shared';
import { Ref, ref, watchEffect } from 'vue';
import { defaultDocument } from '../../config';

/**
 *
 * @param document
 */
export const useDocumentVisibility = (document = defaultDocument): Ref<DocumentVisibilityState> => {
    if (!document) return ref('visible');

    const isvisibility = ref(document.visibilityState);

    const clear = () => {
        if ('removeEventListener' in document) {
            // eslint-disable-next-line no-use-before-define
            document.removeEventListener('visibilitychange', handler);
        } else {
            // @ts-expect-error deprecated API
            // eslint-disable-next-line no-use-before-define
            document.removeListener('visibilitychange', handler);
        }
    };

    const handler = () => {
        clear();

        isvisibility.value = document.visibilityState;
        if ('addEventListener' in document) {
            document.addEventListener('visibilitychange', handler);
        } else {
            // @ts-expect-error deprecated API
            document.addListener(handler);
        }
    };

    watchEffect(handler);

    tryOnScopeDispose(() => clear());

    return isvisibility;
};
