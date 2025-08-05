const { NeuralNetwork } = require("neuraflow");
const { wordToBin, binToWord } = require("./word2bin");
const { inputNodes, hiddenNodes, outputNodes, learningRate, epochs } = require("./config");

const nn = new NeuralNetwork(inputNodes, hiddenNodes, outputNodes, learningRate, epochs);
nn.import("pretrained.json");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a word, I predict the next ones.\n', word => {
    readline.question('How many words should I predict ?.\n', nbr => {
        print(word);
        for (let i = 0; i < parseInt(nbr); i++) {
            output = nn.predict(wordToBin(word));
            word = binToWord(output);
            print(word);
        }
        readline.close();
    });
});