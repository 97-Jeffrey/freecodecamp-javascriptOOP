function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
function Dog(){
  this.name ="haha"
  this.color="blue"
  this.numLegs = 4
}

// it is more convinent to pass in arguments into constructor functions to initialize function:
function Dog(name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color
}

let carry = new Dog("carrie", "red");

// we can use instanceof to see if created object belongs to a certain class:
carry instanceof Dog
