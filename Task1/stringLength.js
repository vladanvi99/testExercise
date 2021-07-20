const stringLength = (text) => {
    if(text.length < 1) {
        return "Your text should be equal or greater than 1";
    } else if (text.length > 10 ) {
        return "Your text should be equal or less than 10";
    } else {
        return text.length;
    }
}

module.exports = stringLength;