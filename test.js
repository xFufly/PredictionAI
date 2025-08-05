const { nbrToBin, binToNbr } = require("./src/binary");

const charBits = 8;
const wordChars = 32;
const wordBits = charBits * wordChars;

const word = "Héllo";
var binWord = [];

for (let c of word) {
    for (let b of nbrToBin(c.charCodeAt(0), 8)) {
        binWord.push(b);
    }
}

for (let i = binWord.length; i < wordBits; i++) {
    binWord.push(0);
}

var wordRecovered = "";
for (let i = 0; i < wordBits; i += charBits) {
    console.log(binWord.slice(i, i + charBits))
    let charCode = binToNbr(binWord.slice(i, i + charBits));
    if (charCode != 0) {
        wordRecovered += String.fromCharCode(charCode);
    } else { break; }
}