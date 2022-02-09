export function memoized(callback) {
    const cache = {};

    return function (...args) {
        const key = args.join('/');
        if (!cache[key]) {
            cache[key] = callback(...args);
        }
        return cache[key];
    };
}
