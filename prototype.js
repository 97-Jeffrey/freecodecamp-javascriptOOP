// since all dogs have four legs, we can add numLeg property in Dog.prototype, which will be shared in all dog instance:

function Dog(name, color) {
  this.name = name;
  this.color = color
}

let dog = new Dog("aka", "dark")
// Dog.prototype.numLegs = 4;

// also, we can check constructor of instance to consturctor function:
console.log(dog.constructor == Dog)

// we can also make a dog's prototype into a object include property and method:
// but setting this remove the constrctor property and we need to add it manually:

Dog.prototype={
  constructor:Dog,
  numLegs:4,
  eat:function(){
    console.log("the dog can eat")
  },
  sleep:function(){
    console.log("the dog can sleep")
  }
}

console.log(dog.constructor == Dog)
