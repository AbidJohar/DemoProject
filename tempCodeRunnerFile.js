// let amount = 550;

// let chunks = {
//     "5000" : 0,
//     "1000" : 0,
//     "500" : 0,
//     "100" : 0,
//     "50" : 0,
//     "20" : 0,
//     "10" : 0,
// }

// if(amount >= 5000){
//    chunks["5000"] = Math.floor(amount / 5000);
//    amount %= 5000;

// }
// if(amount >= 1000){
//   chunks["1000"] = Math.floor(amount / 1000);
//   amount %= 1000;
// }
// if(amount >= 500){
//   chunks["500"] = Math.floor(amount / 500);
//   amount %= 500;
// }
// if(amount >= 100){
//   chunks["100"] = Math.floor(amount / 100);
//   amount %= 100;
// }
// if(amount >= 50){
//   chunks["50"] = Math.floor(amount / 50);
//   amount %= 50;
// }
// if(amount >= 20){
//   chunks["20"] = Math.floor(amount / 20);
//   amount %= 20;
// }
// if(amount >= 10){
//   chunks["10"] = Math.floor(amount / 10);
//   amount %= 10;
// }

// console.log("Here is your amount:",chunks);

//   function isPrime(n){

//     if(n <= 1) return false;
//     if(n === 2 ) return true;
//     if(n%2 == 0) return false;
//     for(let i =3; i <= Math.floor(Math.sqrt(n)); i +=2){

//           if(n%i === 0){
//             return false;
//           }
//     }

//  return true;
//   }

//   console.log(isPrime(9973));

function reverseNum(num) {
  let originalValue = num;
  let sum = 0;

  while (num > 0) {
    let rem = num % 10;

    let fact = 1;
    for (let i = rem; i > 0; i--) {
      fact *= i;
    }

    sum = sum + fact;

    num = Math.floor(num / 10);
  }
  if (sum === originalValue) return true;

  return false;
}

console.log(reverseNum(145));
