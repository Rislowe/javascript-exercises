const palindromes = function (str) {
    let palindrome = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return (
        palindrome.split('')
        .reverse()
        .join('') == palindrome
    );
};

// Do not edit below this line
module.exports = palindromes;
