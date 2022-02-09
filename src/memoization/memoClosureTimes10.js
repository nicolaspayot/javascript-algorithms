import { times10 } from './times10';

export function memoClosureTimes10() {
    const cache = {};

    return function (n) {
        if (!cache[n]) {
            cache[n] = times10(n);
        }
        return cache[n];
    };
}
