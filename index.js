export default function (str) {
  if (typeof str === 'string') {
    return str
      .split('')
      .map(char => {
        const thisCharCode = char.charCodeAt(0);

        if (
          (thisCharCode >= 97 && thisCharCode <= 122) || //Eng [97,122]
          (thisCharCode >= 224 && thisCharCode <= 255) || // German [224,255]
          (thisCharCode >= 1072 && thisCharCode <= 1103) // Russian [1072,1103]
        ) {
          return String.fromCharCode(thisCharCode - 32);
        } else {
          return char;
        }
      })
      .join('');
  }

  return '';
}
