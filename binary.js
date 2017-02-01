/*
TESTS

test_array_a = (100..200).to_a
test_array_b = (100..201).to_a
puts binary_search(135, test_array) == 35
*/

/*
PSEUDOCODE

- create a method, binary_search, that takes an object and an array as an input.
- the object is the number we are testing for to find the index position
- the array is our data set which we will be comparing our object against to find the index position
- establish the index position of the element in our array which is the mid-way point in our array (probably by using array.length)
- make sure that this works for both even and odd array lengths
- create a method to cut our array length in half, and determine if our object is higher or lower than the array number at that "half array" index position
- if our number is exactly the same as the "half array" index number, return the index position of that number in the array.
- if our number is higher, discard the lower half of our array set and continue testing against the upper half of our array (taking the middle position each time).
- if lower, do the opposite of above.
- continue until "half_array" index is equal to number, at which point return the index position of number chosen.
*/

'use strict'

var test_array_genap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test_array_ganjil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let sortArrOfString = (arrOfString) => {
  let arrOfStringLength = arrOfString.length;
  for (let i=0;i<arrOfStringLength-1;i++) {
    let min = i;
    let lastMin = i;
    for (let j=i+1;j<arrOfStringLength;j++) {
      lastMin = arrOfString[j] < arrOfString[lastMin] && arrOfString[j] < arrOfString[i] ? j : lastMin; 
      min = lastMin;
    }
    if (min !== i) {
      let tempForCurrentArr = arrOfString[i];
      arrOfString[i] = arrOfString[min];
      arrOfString[min]  = tempForCurrentArr;
    }
  }
  return arrOfString;
}

function binary_search (search, array) {
  let sortedArr = sortArrOfString(array);
  let start = 0;
  let end = sortedArr.length-1;
  while(start <= end) {
    let midPoint = Math.ceil((start+end)/2);

    if (sortedArr[midPoint] === search) {
      return midPoint;
    } else if(sortedArr[midPoint] < search) {
      start = midPoint+1;
    } else if (sortedArr[midPoint] > search) {
      end = midPoint-1;
    } 
  }
  return -1;
}

let test_array_a = [];
for(let i=100;i<201;i++) {
  test_array_a.push(i);
}
// test_array_b = (100..201).to_a
console.log(binary_search(135, test_array_a));
// puts binary_search(135, test_array_a) == 35
// Driver code
console.log(binary_search(5, test_array_genap))
console.log(binary_search(10, test_array_genap))
console.log(binary_search(2, test_array_genap))

console.log(binary_search(6, test_array_ganjil))
console.log(binary_search(11, test_array_ganjil))
console.log(binary_search(2, test_array_ganjil))
