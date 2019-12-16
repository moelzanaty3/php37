// Loop 
    // 1. Initialization 
    // 2. condition 
    // 3. Body 
    // 4. increment 

    // 2. condition 
    // 3. Body 
    // 4. increment 
// for(initialization;condition;increment) {
//     body
// }
/*
  Write some code that declares two variables, character and timesToRepeat.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

let character = 'f';
let timesToRepeat = 5;
let result = "";
for(let i = 0; i < timesToRepeat; i++) {
    result = result + character;
    // result => "" + f => f 
}
console.log(result);