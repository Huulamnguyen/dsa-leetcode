/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const newArr = [];
  
  for(let num = 1; num <= n; num++){
    const divisibleBy3 = num % 3 === 0 ? true : false;
    const divisibleBy5 = num % 5 === 0 ? true : false;
    
    if(divisibleBy3 && divisibleBy5){
      newArr.push("FizzBuzz")
    } else if (divisibleBy3){
      newArr.push("Fizz")
    } else if (divisibleBy5){
      newArr.push("Buzz")
    } else {
      newArr.push(num.toString());
    }
  }
  
  return newArr;
};