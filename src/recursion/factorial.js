import { memoized } from '../memoization/memoized';

export function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

export const memoFactorial = memoized(factorial);
