// Implement polyfills for reduce and filter in JavaScript.

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };
  
    const numbers = [1, 2, 3, 4];
    const sum = numbers.myReduce((acc, num) => acc + num, 0);
    console.log(sum); // Output: 10


  Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
    const number = [1, 2, 3, 4];
    const evenNumbers = number.myFilter(num => num % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4]
