1. Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.
      A closure in JavaScript is a function that retains access to its lexical scope, even after the outer function has finished executing.
      Use case: Closure can be beneficial in when creating a counter function that keep tracks of the count.
      function createCounter() {
      let count = 0;
      return function () {
      count++;
      return count;
      };
    }
    const counter = createCounter();
    console.log(counter()); // output: 1
    console.log(counter()); // output: 2

2. Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.
    var: Function-scoped, hoisted to the top of its scope, but initialized as undefined until assigned.
    let: Block-scoped, hoisted but not initialized , preventing access before declaration.
    const: Block-scoped and also in a temporal dead zone. It requires an initial assignment and cannot be reassigned, though its contents can still be mutated if it’s an object or array.

3. What are the differences between a programming language and a scripting language? Where does JavaScript fit in?
    A programming language is a language that is used to write software, which can be compiled or interpreted.
    A scripting language is a language that is used to write scripts, which are typically interpreted and executed line.
    JavaScript  is a scripting language for browsers, but with Node.js, it has expanded into a programming language capable of server-side and general-purpose applications.

