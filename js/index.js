// 1-masala

// function ildiz(num) {
//   return Math.sqrt(num);
// }
// console.log(ildiz(9));

// 2-masala

// function twonumbers(a, b) {
//   return a - b;
// }
// console.log(twonumbers(10, 5));

// 3-masala

// function string(str, num) {
//   let result = '';
//   for (let i = 0; i < num; i++) {
//       result += str;
//   }
//   return result;
// }
// console.log(string('salom', 3)); 

// 4-masala

// function find(num) {
//   return num * num * num;
// }
// console.log(find(3));

// 5-masala

// function floor(a, b) {
//   return Math.floor(a / b);
// }
// console.log(floor(30, 2));

// 6-masala
// function findyear(year) {
//   let century = year / 100;
//   if (year % 100 !== 0) {
//       century = Math.floor(century) + 1;
//   }
//   return century;
// }
// console.log(findyear(2024));
// 10-masala

// function fingstring(str) {
//   for (let i = 0; i < str.length; i++) {
//       if (str[i] < '0' || str[i] > '9') {
//           return false;
//       }
//   }
//   return true;
// }
// console.log(fingstring('12345')); 
// console.log(fingstring('123m45')); 

// 11-masala
// function power(a, b) {
//   return Math.pow(a, b);
// }
// console.log(power(2, 3)); 
// massivlarga oid masalalar

// 1-masala
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let array1 = [1, 2, 3, 4, 5];
// console.log(sumArray(array1));  Sonlarni yigindisi 15;

// 2-masala
// function Max(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let array2 = [1, 2, 3, 4, 5];
// console.log(Max(array2)); // Eng katta element 5;


// 3-masala
// function Array(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// let array3 = [1, 2, 3, 4, 5];
// console.log(Array(array3)); // Teskari tartibda yozilishi: [5, 4, 3, 2, 1]

// 4-masala

// function musbatnumbers(arr) {
//     let positiveArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveArr.push(arr[i]);
//         }
//     }
//     return positiveArr;
// }

// let array4 = [1, -2, 3, -4, 5];
// console.log(musbatnumbers(array4)); // [1, 3, 5]

// 5-masala
 
// function squareElements(arr) {
//     let squaredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         squaredArr.push(arr[i] * arr[i]);
//     }
//     return squaredArr;
// }

// let array5 = [1, 2, 3, 4, 5];
// console.log(squareElements(array5)); // kvadratga oshirish [1, 4, 9, 16, 25]

// 7-masala
// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// let array7_1 = [1, 2, 3];
// let array7_2 = [4, 5, 6];
// console.log(mergeArrays(array7_1, array7_2)); // [1, 2, 3, 4, 5, 6]


// 8-masala
// function counNumbers(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }

// let array8 = [1, 2, 3, 4, 5];
// console.log(counNumbers(array8)); // 3

// 9-masala
// function addArray(arr, num) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + num);
//     }
//     return newArr;
// }

// let array9 = [1, 2, 3, 4, 5];
// console.log(addArray(array9, 5)); // [6, 7, 8, 9, 10]

// 10-masala
// function findMin(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// let array10 = [1, 2, 3, 4, 5];
// console.log(findMin(array10)); // 1


