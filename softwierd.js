const dict = ['The', 'fox', 'jumped', 'a', 'are'];

const softwierd = (word) => {
    if (dict.includes(word)) {
    return word
    } else if (word == "") {
        return "" 
    } else {
    return `~${word}~`

    }

 };


module.exports = softwierd;