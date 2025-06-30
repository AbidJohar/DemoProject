// new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//     const one = true;
//     if(one){
//     console.log("task is completed");
//     resolve({name: "abid", age:21});
//     }
//     else{
//         reject("Error; something went wrong");
//     }
//   },1000)

// })
// .then((data)=>{
//     console.log("Data:",data);
//     return data.name
// })
// .then((name)=>{
//     console.log("name:",name);

// })
// .catch((err)=>{
//  console.log(err);

// })

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then((data) => {
//         console.log("Response Data:", data);
//         return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`);
//     })
//     .then(response => response.json())
//     .then(posts => console.log("User's Posts:", posts.map(post => post.title)))
//     .catch(err => console.error("Error:", err));

// const getUserData = (userId)=>{
//     return new Promise((resolve,reject)=>{

//          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//          .then(responce => responce.json())
//          .then(data => resolve(data))
//          .catch(err => reject(err))
//     })
// }

// getUserData(1)
// .then(user => console.log("userDetails:",user)
// )
// .catch((err)=>{
//     console.log("error:",err);

// })

//  function recursion(word){

//     if(typeof(word) === 'undefined'){
//         return "word in undefine"
//     }

//     if( word?.length <= 1 ){
//         return word;
//     }

//     return word[word?.length - 1] + recursion(word.slice(0,-1))

//  }

//  const value = recursion();
//  console.log(value);

//  const recursion = (str)=>{

//     if(str.length <= 1){
//         return str;
//     }

// return str[str.length -1] + recursion(str.slice(0,-1));

//  }

//  console.log(recursion("abid"));

//  function duplicateRemover(arr){

//    let newArray = [...new Set(arr)];
//        return newArray;
//  }

//  let arr = [1,2,3,4,2,5,6,2];

// console.log(duplicateRemover(arr));

// let array = [1,2,3,4,5,5];

// let copyarray = array.slice(0,2);

// console.log("orginal array:",array);
// console.log("copy array:",copyarray);

// let string = "abidhussain";
//  let obj = {}

//  string.split('').map((al)=>{
//   if(obj[al]){
//     obj[al] += 1;
//   }
//   else{
//     obj[al] = 1;
//   }

//  });

//  console.log(obj);

//________________(find second largest number)______________

// function secondLargetNum(arr) {
//   let largestNum = 0;
//   let secondLargetNum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] > largestNum) {

//       secondLargetNum = largestNum;
//       largestNum = arr[i];
//     } else if (arr[i] > secondLargetNum && arr[i] !== largestNum)

//       secondLargetNum = arr[i];
//   }

//   return secondLargetNum;
// }

// console.log(secondLargetNum([2, 3, 4, 6, 4, 8, 9, 0]));

//________________________(charactors count)_____________________

// function charatorsCount(str) {
//   let count = {};

//   if (str === "") {
//     return null;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (count[str[i]]) {
//       count[str[i]] += 1;
//     } else {
//       count[str[i]] = 1;
//     }
//   }
//   return count;
// }

// console.log(charatorsCount("java"));

// function reverseArrayElements(arr){

// for(let i =0 ; i< Math.floor(arr.length/2); i++){

//        let temp = arr[i];
//        arr[i] = arr[arr.length - 1 -i];
//        arr[arr.length - 1 -i] = temp;

// }

// return arr;
// }

// console.log(reverseArrayElements([2,3,4,5,6,7]));

// ________________(bubble sort)_______________

// const bubbleSort = (arr) => {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

//_______ rotate element  left or right by k ____________

// let arr = [1, 2, 3, 4, 5];

// let k = 2;

// for (let i = 0; i < k; i++) {

//   console.log("First loop at element:", i);

//   let copy1stindex = arr[arr.length - 1];

//   for (let i = arr.length -1; i >=0 ; i--) {

//     console.log(`Element ${i} :  `);

//     arr[i] = arr[i - 1];

//     console.log(arr[i]);

//   }
//   arr[0] = copy1stindex;
// }

// console.log(arr);

// _________________( optimize version )_______________




// let arr = [1,2,3,4,5];
// let k =2;

// let arr1 = new Array(arr.length);


// for(let i=0; i<arr.length; i++){

//     arr1[i] = arr[(i + k) % arr.length]
// }

// console.log(arr1);


let arr = [1,2,3,4,5];

let k=3;

 k = k % arr.length - 1;

 console.log("return arr",reverse(0, k));
 
 function reverse(i,j){
     
      
     
     while(i<j){
         arr[i]
         
         i++;
         j--;
         
        }

        return arr
        
    }
    
    
 






 
 
