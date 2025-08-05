/* 
Converts a decimal number to binary under the form of an array
Example : 2 on 3 bits = [0, 1, 0]
*/
function nbrToBin(nbr, bitsNbr) {
    const arr = new Array(bitsNbr).fill(0);
    let i = 1;
    for (let e of nbr.toString(2).split('').reverse()) {
        arr[arr.length - i] = e * 1;
        if (arr.length - i < 0) {
            console.error(`Can't code ${nbr} on ${bitsNbr} bits.`);
            throw new Error("Overflow Error.");
        }
        i++;
    }
    return arr;
}

function binToNbr(arr) {
    for (let i in arr) {
        arr[i] = Math.round(arr[i]);
    }
    return parseInt(arr.join(""), 2);
}

module.exports = {
    nbrToBin,
    binToNbr
};