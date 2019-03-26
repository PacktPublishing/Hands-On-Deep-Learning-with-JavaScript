const { Architect, Trainer } = window.synaptic;

var multiLayerPerceptron = new Architect.Perceptron(2, 2, 1)
var trainer = new Trainer(multiLayerPerceptron)

var trainingData = [
  {
    input: [0,0],
    output: [0]
  },
  {
    input: [0,1],
    output: [1]
  },
  {
    input: [1,0],
    output: [1]
  },
  {
    input: [1,1],
    output: [0]
  },
]

trainer.train(trainingData,{
  rate: .1,
  iterations: 34000, //number of times the whole training set is gone over
  error: .0005, //change the error to change the minimum error till the network trains
  shuffle: true,
  log: 2000, //log the error after every 2000 iterations
  cost: Trainer.cost.CROSS_ENTROPY //the corresponding loss function
  });

console.log(multiLayerPerceptron.activate([0,0]));
console.log(multiLayerPerceptron.activate([0,1]));
console.log(multiLayerPerceptron.activate([1,0]));
console.log(multiLayerPerceptron.activate([1,1]));