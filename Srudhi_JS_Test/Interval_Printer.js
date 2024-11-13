// Write code that prints numbers from 1 to 10, each number after a 1-second delay.

function printNumbers() {
    let num = 1;
    const interval = setInterval(() => {
      console.log(num);
      if (num === 10) clearInterval(interval);
      num++;
    }, 1000);
  }
  
  printNumbers();
  