export function isWordPalindrome(str) {
    const lowerCaseString = str.toLowerCase();
    for (let i = 0, j = lowerCaseString.length - 1; i < j; i++, j--) {
        if(lowerCaseString[i]!=lowerCaseString[j]){
            return false
        }
    }
    return true;
}

export function isSentencePalindrome(str) {
    const lowerCaseString = str.toLowerCase().replace(/\s+/g, '');
    for (let i = 0, j = lowerCaseString.length - 1; i < j; i++, j--) {
        if (lowerCaseString[i] != lowerCaseString[j]) {
            return false;
        }
    }
    return true;
}

