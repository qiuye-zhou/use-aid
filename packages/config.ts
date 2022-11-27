import { isClient } from './utils/is';

export const defaultWindow = isClient ? window : undefined;
