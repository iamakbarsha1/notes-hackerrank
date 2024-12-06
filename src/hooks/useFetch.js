import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("data fetched");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useFetch;

// https://onecompiler.com/nodejs
// for (var i = 1; i <= 5; i++) {   setTimeo... by Richy Ashish Joseph
// Richy Ashish Joseph
// 11:38 AM
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function() {
//    console.log(i);
//   }, 1000);
// }
//   console.log('Message no. 1: Sync');     s... by Richy Ashish Joseph
// Richy Ashish Joseph
// 11:48 AM

// console.log('Message no. 1: Sync');

// setTimeout(function() {
//   console.log('Message no. 2: setTimeout');
// }, 0);

// var promise = new Promise(function(resolve, reject) {
//   resolve();
// });

// promise.then(function(resolve) {
//   console.log('Message no. 3: 1st Promise');
// })

// .then(function(resolve) {
//   console.log('Message no. 4: 2nd Promise');
// });

// console.log('Message no. 5: Sync');

// Write a function that takes two integer arr... by Richy Ashish Joseph
// Richy Ashish Joseph
// 11:55 AM
// Write a function that takes two integer arrays as arguments. Merge both arrays and remove duplicate values. Sort the merged result in ascending order. Return the resulting array.
// Test Case :
// Input - [4,2,0,1,-1], [1,9,11,2,7]
// Expected Output - [-1,0,1,2,4,7,9,11]
// has context menu

// has context menu
