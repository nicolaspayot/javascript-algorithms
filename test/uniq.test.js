import { describe, test, expect } from 'vitest';
import { isUniq, isUniq2, uniqSort } from '../src/uniq';

describe('uniq', () => {
    test('isUniq should indicate if an array is composed of uniq items', () => {
        expect(isUniq([1, 2, 3, 4, 5])).toBe(true);
        expect(isUniq([1, 2, 2, 3, 4, 5])).toBe(false);
    });

    test('isUniq2 should indicate if an array is composed of uniq items', () => {
        expect(isUniq2([1, 2, 3, 4, 5])).toBe(true);
        expect(isUniq2([1, 2, 2, 3, 4, 5])).toBe(false);
    });

    test('uniqSort should return a new array without duplicates', () => {
        expect(uniqSort([5, 4, 4, 3, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
});
