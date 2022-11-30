import { isClient } from './utils/is';

export const defaultWindow = isClient ? window : undefined;
export const defaultDocument = isClient ? window.document : undefined;
