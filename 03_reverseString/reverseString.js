const reverseString = function(str) {

    if(str == '')
    {
        return '';
    }

    let reverseStr = "";

    for (let i = str.length; i > 0; i--)
    {
        reverseStr += str.charAt(i-1);
    }

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
