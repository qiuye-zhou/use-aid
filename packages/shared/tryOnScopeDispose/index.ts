import { getCurrentScope, onScopeDispose } from 'vue';
import type { Fun } from '../../utils/type';

/**
 * 如果它在作用域生命周期内，则调用onScopeDispose() 如果不在，则不执行任何操作
 * @param fun
 */
export function tryOnScopeDispose(fun: Fun) {
    if (getCurrentScope()) {
        onScopeDispose(fun);
        return true;
    }
    return false;
}
