const countWordOccurrences = (sentence: string, word: string): number => {
    const givenSentence = sentence.toLowerCase();
    const splitOfSentenceInArray = givenSentence.split(" ")

    // console.log(splitOfSentenceInArray);
    
    const givenWord = word.toLowerCase();
    let ArrayOfSimilarWord = splitOfSentenceInArray.filter(singleWord => singleWord === givenWord);

    // console.log(ArrayOfSimilarWord);
    
    return ArrayOfSimilarWord.length;
};


