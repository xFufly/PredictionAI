const { NeuralNetwork } = require("neuraflow");
const { wordToBin, binToWord } = require("./word2bin");
const { nbrToBin, binToNbr } = require("./binary");
const { inputNodes, hiddenNodes, outputNodes, learningRate, epochs } = require("./config");


const nn = new NeuralNetwork(inputNodes, hiddenNodes, outputNodes, learningRate, epochs);

// Importing the dataset
const dataset = require("../datasets/poems_fr.json");

var trainingInputs = [];
var trainingOutputs = [];

for (let o of dataset) {
    let content = o.content.split(" ");
    let i = 0;
    for (word of content) {
        let hash = wordToBin(word);
        if (i > 0 && i < Object.keys(content).length) {
            trainingInputs.push(wordToBin(content[i-1]))
            trainingOutputs.push(hash);
        }
        i++;
    }
}

nn.train(trainingInputs, trainingOutputs);

/* TRAIN TESTING AREA */
var fail = 0;
var ok = 0;

trainingInputs.forEach((input, index) => {
    const output = nn.predict(input);
    if (binToWord(output) === binToWord(trainingOutputs[index])) {
        print(`I: ${binToWord(input)} | O: ${binToWord(output)} | Expected: ${binToWord(trainingOutputs[index])}`);
        ok++;
    } else { 
        fail++ 
    }
});

print(ok + "/" + fail);
console.log(`${((ok / (ok + fail)) * 100).toFixed(2)}% success rate.`);


nn.export("pretrained.json");