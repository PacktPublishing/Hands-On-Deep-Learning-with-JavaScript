const { Node } = window.neataptic;

var X = new Node();
var Y = new Node('output');
X.connect(Y);

var lRate = .3;
var momentum = 0;

for(var i = 0; i < 10000; i++)
{
  // when X activates 1
  X.activate(1);
  // train Y to activate and then backpropagate 0 using the propagate function
  Y.activate();
  Y.propagate(lRate, momentum, true, 0);

}

// test it
X.activate(1);
console.log(Y.activate());