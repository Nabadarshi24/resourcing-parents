const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const wordObject = [
    { key: "t1", value: 'spray' },
    { key: "t2", value: 'limit' },
    { key: "t3", value: 'elite' },
    { key: "t4", value: 'exuberant' },
    { key: "t5", value: 'destruction' },
    { key: "t5", value: 'present' }
];
let newResult = [];

// const result = words.filter(word => word.length > 6);
const result = words.filter(word => word !== 'elite');

const resultWordArray = wordObject.filter(word => word.key == "t7");
const resultWordObject = wordObject.find(word => word.key == "t7");

console.log(resultWordArray);
console.log(resultWordObject);
// console.log(resultWord);

for (var i = 0; i < words.length; i++) {
    // if (words[i].length > 6) {
    if (words[i] !== 'elite') {
        newResult.push(words[i]);
    }
}

console.log(newResult);