

const removeDuplicates = (arr: Array<number>): Array<number> => {
    let selectedNumbers: Array<number> = [];

    for(let i = 0; i < arr.length; i++){
        let number = arr[i];
        if(selectedNumbers.indexOf(number) === -1){
            selectedNumbers.push(number);
        }
    }

    return selectedNumbers;

}

