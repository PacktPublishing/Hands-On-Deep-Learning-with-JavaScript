const { architect } = window.neataptic;

var networkAND = new architect.Perceptron(2,3,1);

var trainingData = [
  { input: [0,0], output: [0] },
  { input: [0,1], output: [0] },
  { input: [1,0], output: [0] },
  { input: [1,1], output: [1] }
];

// Train the AND gate
networkAND.train(trainingData, {
  log: 10,
  iterations: 1000,
  error: 0.0001,
  rate: 0.2
});

console.log(networkAND.activate([0,0]));
console.log(networkAND.activate([0,1]));
console.log(networkAND.activate([1,0]));
console.log(networkAND.activate([1,1]));