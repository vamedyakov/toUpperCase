//Complexity: O(n) time, O(n) space
export default function toUpperCase(str) {
  if (typeof str === 'string') {
    return str
      .split('')
      .map(char => {
        const thisCharCode = char.charCodeAt(0);
        return String.fromCharCode(thisCharCode - getDiffChar(thisCharCode));
      })
      .join('');
  }

  return '';
}

//Complexity: O(n) time, O(1) space
export function toUpperCase2(str) {
  let newStr = '';
  if (typeof str === 'string') {
    for (let i = 0; i < str.length; i++) {
      const thisCharCode = str[i].charCodeAt(0);
      newStr += String.fromCharCode(thisCharCode - getDiffChar(thisCharCode));
    }
  }

  return newStr;
}

function getDiffChar(charCode) {
  if (
    (charCode >= 97 && charCode <= 122) || //Eng [97,122]
    (charCode >= 224 && charCode <= 255) || // German [224,255]
    (charCode >= 1072 && charCode <= 1103) //// Russian [1072,1103]
  ) {
    return 32;
  } else if (charCode === 1105) {
    // Russian ёЁ
    return 80;
  }

  return 0;
}
