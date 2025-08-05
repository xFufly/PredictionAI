/*** 
 * Word2bin
 * Author : DIDELOT Tim
 * Simpler but heavier way for obtaining binary representations of words than Google's Word2vec
 * Word2vec : https://en.wikipedia.org/wiki/Word2vec
 ***/

/* 
Binary words representation :

This script converts a word into its binary representation using UTF-16 character codes, then pads the result to a fixed length
(corresponding to 32 characters × 8 bits = 256 bits). The reverse process decodes this binary representation back into the original word.

Limitations:
- Assumes that all characters fit into 8 bits, which is not always the case for extended Unicode (e.g., emojis).
- Output size is fixed at 256 bits regardless of the actual word length, which makes it heavier than models like Word2vec,
  but easier to work with in low-complexity scenarios

Example:
Input word: "Héllo"
Binary representation (first 5 chars): [
  '01001000',  // 'H'
  '11101001',  // 'é'
  '01101100',  // 'l'
  '01101100',  // 'l'
  '01101111'   // 'o'
  ... padded with zeros to reach 256 bits ...
]

*/

const { nbrToBin, binToNbr } = require("./binary");
const { charBits, wordBits, wordChars } = require("./config");

/**
 * Converts a string (word) into a fixed-size binary array.
 * Each character is encoded using 8 bits (UTF-16 lower byte),
 * and the result is padded with zeros to reach 256 bits (32 characters).
 * 
 * @param {string} word - The input word to encode.
 * @returns {number[]} A binary array representing the word.
 */
function wordToBin(word) {
    let binWord = [];

    for (let c of word) {
        let charCode = c.charCodeAt(0);
        let binChar = nbrToBin(charCode, charBits);
        binWord.push(...binChar);
    }

    // Pad the binary word to 256 bits
    while (binWord.length < wordBits) {
        binWord.push(0);
    }

    return binWord;
}

/**
 * Converts a fixed-size binary array back into a string.
 * Stops decoding if a null character (code 0) is encountered.
 * 
 * @param {number[]} binWord - The binary array (must be 256 bits).
 * @returns {string} The decoded string.
 */
function binToWord(binWord) {
    let word = "";

    for (let i = 0; i < wordBits; i += charBits) {
        let byte = binWord.slice(i, i + charBits);
        let charCode = binToNbr(byte);

        if (charCode !== 0) {
            word += String.fromCharCode(charCode);
        } else {
            break;
        }
    }

    return word;
}

module.exports = {
    wordToBin,
    binToWord
};