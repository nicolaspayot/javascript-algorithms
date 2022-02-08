import { times10 } from './times10';

const cache = {};

export function memoTimes10(n) {
    if (!cache[n]) {
        cache[n] = times10(n);
    }
    return cache[n];
}
