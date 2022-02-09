import { beforeEach, describe, test, expect, vi } from 'vitest';
import * as times10Mod from '../src/memoization/times10';
import { memoTimes10 } from '../src/memoization/memoTimes10';
import { memoClosureTimes10 } from '../src/memoization/memoClosureTimes10';
import { memoized } from '../src/memoization/memoized';

describe('memoization', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

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

    test('memoClosureTimes10 should return n times 10 with memoization and closure', () => {
        const spy = vi.spyOn(times10Mod, 'times10');

        const times10 = memoClosureTimes10();

        expect(times10(1)).toBe(10);
        expect(times10(2)).toBe(20);
        expect(times10(2)).toBe(20);
        expect(times10(3)).toBe(30);
        expect(times10(4)).toBe(40);
        expect(times10(4)).toBe(40);
        expect(times10(5)).toBe(50);

        expect(spy).toHaveBeenCalledTimes(5);
    });

    test('memoized should return generic operation result with memoization and closure', () => {
        const add = (a, b) => a + b;
        const times = (a, b, c) => a * b * c;
        const operations = { add, times };

        const spyAdd = vi.spyOn(operations, 'add');
        const spyTimes = vi.spyOn(operations, 'times');

        const memoAdd = memoized(operations.add);
        const memoTimes = memoized(operations.times);

        expect(memoAdd(1, 2)).toBe(3);
        expect(memoAdd(1, 2)).toBe(3);
        expect(memoAdd(2, 3)).toBe(5);
        expect(memoAdd(3, 4)).toBe(7);
        expect(spyAdd).toHaveBeenCalledTimes(3);

        expect(memoTimes(1, 2, 3)).toBe(6);
        expect(memoTimes(2, 3, 4)).toBe(24);
        expect(memoTimes(2, 3, 4)).toBe(24);
        expect(memoTimes(3, 4, 5)).toBe(60);
        expect(memoTimes(4, 5, 6)).toBe(120);
        expect(spyTimes).toHaveBeenCalledTimes(4);
    });
});
