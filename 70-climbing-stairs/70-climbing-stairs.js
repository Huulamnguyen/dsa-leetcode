/**
 * @param {number} n
 * @return {number}
 */
// function climbStairs(n) {
//   const obj = {};
//   return random(n, obj);
// }

// function random(n, obj) {
//   if (!(n in obj)) {
//     if (n === 0) {
//       return 1;
//     }

//     if (n < 0) {
//       return 0;
//     }

//     obj[n] = climbStairs(n - 1) + climbStairs(n - 2);
//     return obj[n];
//   }
//   else {
//     return obj[n];
//   }
// }


function climbStairs(n){
  if (n === 1){
    return 1;
  }
  let first = 1
  let second = 2
  for(let i = 3; i<=n; i++){
    let third = first + second
    first = second
    second = third
  }
  return second
}