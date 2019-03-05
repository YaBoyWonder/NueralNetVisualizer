//this global class for Neuron is going to be the place spawning Nodes with the predicted/activated values - Rahul

class Neuron {
  constructor(pa, pb, pc, va, vb, vc) {
    this.pos = { a: pa, b: pb, c: pc };
    this.vel = { a: va, b: vb, c: vc };
    this.predicted = false;
    this.activated = false;
	//establish new set
    this.distalNodes = new Set();
    this.proximalNodes = new Set();
  }
}
