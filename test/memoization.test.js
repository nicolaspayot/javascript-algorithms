import { describe, test, expect, vi } from 'vitest';
import * as times10Mod from '../src/memoization/times10';
import { memoTimes10 } from '../src/memoization/memoTimes10';

describe('memoization', () => {
    test('memoTimes10 should return n times 10 with memoization', () => {
        const spy = vi.spyOn(times10Mod, 'times10');

        expect(memoTimes10(1)).toBe(10);
        expect(memoTimes10(2)).toBe(20);
        expect(memoTimes10(2)).toBe(20);
        expect(memoTimes10(3)).toBe(30);
        expect(memoTimes10(4)).toBe(40);
        expect(memoTimes10(4)).toBe(40);
        expect(memoTimes10(5)).toBe(50);

        expect(spy).toHaveBeenCalledTimes(5);
    });
});
