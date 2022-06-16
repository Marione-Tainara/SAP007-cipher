const cipher = {
  encode: function (offset, string) {
    if (offset == 0 || offset == null || offset == undefined) {
      throw new TypeError();
    }

    let mgsCode = "";

    for (let i = 0; i < string.length; i++) {
      let encrypto = string[i].charCodeAt();

      if (encrypto >= 65 && encrypto <= 90) {
        mgsCode += String.fromCharCode(((encrypto - 65 + offset) % 26) + 65);
      } else if (encrypto >= 97 && encrypto <= 122) {
        mgsCode += String.fromCharCode(((encrypto - 97 + offset) % 26) + 97);
      } else {
        mgsCode += string.charAt(i);
      }
    }
    return mgsCode;
  },

  decode: function (offset, string) {
    if (offset == 0 || offset == null || offset == undefined) {
      throw new TypeError();
    }

    let mgsDecode = "";
    for (let i = 0; i < string.length; i++) {
      let decrypto = string[i].charCodeAt();

      if (decrypto >= 65 && decrypto <= 90) {
        mgsDecode += String.fromCharCode(((decrypto + 65 - offset) % 26) + 65);
      } else if (decrypto >= 97 && decrypto <= 122) {
        mgsDecode += String.fromCharCode(
          ((decrypto - 122 - offset) % 26) + 122
        );
      } else {
        mgsDecode += string.charAt(i);
      }
    }
    return mgsDecode;
  },
};
export default cipher;