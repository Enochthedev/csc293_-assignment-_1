const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let num1, num2, num3, num4, num5;
  
  readline.question('Enter first number: ', (input) => {
    num1 = parseInt(input);
    readline.question('Enter second number: ', (input) => {
      num2 = parseInt(input);
      readline.question('Enter third number: ', (input) => {
        num3 = parseInt(input);
        readline.question('Enter fourth number: ', (input) => {
          num4 = parseInt(input);
          readline.question('Enter fifth number: ', (input) => {
            num5 = parseInt(input);
            let sum = num1 + num2 + num3 + num4 + num5;
            console.log("The sum of the 5 numbers is: " + sum);
            readline.close();
          });
        });
      });
    });
  });
  