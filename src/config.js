const hiddenNodes = 256; // Number of hidden layers
const charBits = 8; // Number of bits for a char
const wordChars = 32; // Number maximum of chars for a word
const wordBits = charBits * wordChars; // Number of bits for a word
const inputNodes = wordBits;
const outputNodes = wordBits;
const learningRate = 0.25; // Should it try itself to find the answer ?
const epochs = 10000; // Number of "steps" to try to correct its mistakes

module.exports = {
    hiddenNodes,
    inputNodes,
    outputNodes,
    learningRate,
    epochs,
    charBits,
    wordBits,
    wordChars
};
