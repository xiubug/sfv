export default function (obj, key, def) {
    key = key.split ? key.split('.') : key;
    for (let p = 0; p < key.length; p++) {
        obj = obj ? obj[key[p]] : undefined;
    }

    return obj === undefined ? def : obj;
}