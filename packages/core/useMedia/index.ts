import { ref, onUnmounted } from 'vue';

/**
 * Media query to determine whether the browser is in the current condition
 * @param value Must be of type number
 * @param type Must be 'max' or 'min'
 * @returns Whether it is in the judging state( true || false )
 */
export const useMedia = (value: number = 768, type: string = 'max') => {
    if (typeof value !== 'number') throw new Error('The value type should be number');

    if (type !== 'max' && type !== 'min') throw new Error('Type should be max or min');

    const isMedia = ref(false);
    const mediaQuery = matchMedia(`(${type}-width: ${value}px)`);

    isMedia.value = mediaQuery.matches;

    const handler = () => {
        isMedia.value = mediaQuery.matches;
    };

    mediaQuery.addEventListener('change', handler);

    onUnmounted(() => {
        mediaQuery.removeEventListener('change', handler);
    });

    return isMedia;
};
