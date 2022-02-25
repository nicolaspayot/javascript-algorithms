export function joinElements(array, suffix) {
    return array.reduce((acc, str, index) => {
        let strToAdd = str;
        if (index !== array.length - 1) {
            strToAdd += suffix;
        }
        acc += strToAdd;
        return acc;
    }, '');
}
