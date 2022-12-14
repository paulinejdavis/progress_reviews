const dict = ['the', 'fox', 'jumped', 'a', 'are'];

const softwierd = (word) => {
    var splitSentence = word.split(" ")
    var outputSentence = splitSentence.map()
    if (dict.includes(word)) {
    return word
    } else if (word == "") {
        return "" 
    } else {
    return `~${word}~`

    }

 };


module.exports = softwierd;