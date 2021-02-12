export const objectToArray = (obj) => {
    let array = [];

    for (const prop in obj) {
        array.push(obj[prop]);
    }

    return array;
};