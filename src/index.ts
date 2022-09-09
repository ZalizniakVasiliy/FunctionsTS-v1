const arr: number[] = [1, 2, 3, -1, -2, -3];

const getPositiveNumArray = (array: number[]) => {
    let newArr: number[] = [];

    if (array.length === 0) return "This array is empty. You should fill it out.";

    for (let i: number = 0; i < array.length; i++) {
        if (array[i] >= 0) newArr.push(array[i]);
    }

    return newArr.length > 0 ? newArr : null;
};

console.log(getPositiveNumArray(arr));