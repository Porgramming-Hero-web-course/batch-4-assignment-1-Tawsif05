
const sumArray = (arr: Array<number>): number => {
    let sum = 0;
    const mainArr = arr;
    mainArr.map(one => {
        sum += one
    }
    );
    return sum;
}




