import { describe, expect, test } from 'vitest';
import { joinElements } from '../src/recursion/joinElements';
import { memoized } from '../src/memoization/memoized';
import { factorial, memoFactorial } from '../src/recursion/factorial';

describe('recursion', () => {
    test('joinElements with iterative loop', () => {
        expect(joinElements(['s', 'cr', 't cod', ' :) :)'], 'e')).toBe('secret code :) :)');
    });

    test('factorial with recursion', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
        expect(factorial(3)).toBe(6);
        expect(factorial(2)).toBe(2);
        expect(factorial(1)).toBe(1);
        expect(factorial(0)).toBe(1);
    });

    test('factorial with recursion and memoization', () => {
        expect(memoFactorial(5)).toBe(120);
        expect(memoFactorial(4)).toBe(24);
        expect(memoFactorial(3)).toBe(6);
        expect(memoFactorial(2)).toBe(2);
        expect(memoFactorial(1)).toBe(1);
        expect(memoFactorial(0)).toBe(1);
    });
});
