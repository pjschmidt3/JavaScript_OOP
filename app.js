class Person {
  constructor (name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  info () {
    console.log('Name: ', this.name);
    console.log('Pets: ',  this.pets);
    console.log('Residence: ', this.residence);
    console.log('Hobbies', this.hobbies);
  }

  soundOff () {

  }

  greeting () {
    console.log('Hello fellow human');
  }
}

class Coder extends Person {
  constructor (name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  greeting () {
    console.log("Yo I'm a coder");
  }
}

const coder = new Coder("Phil", ["dog", "cat"], "Louisiana", ["programming"]);

console.log(coder.name);
console.log(coder.pets);
console.log(coder.residence);
console.log(coder.hobbies);
coder.info();
coder.greeting();
