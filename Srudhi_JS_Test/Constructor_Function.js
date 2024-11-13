// Create a constructor function Person with a property name. Add a method greet to its prototype that prints "Hello, <name>". Test this with different instances.

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
  
  
  const person1 = new Person("Alice");
  person1.greet(); // "Hello, Alice"
  const person2 = new Person("Bob");
  person2.greet(); // "Hello, Bob"

  