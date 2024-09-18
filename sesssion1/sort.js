const arr = [5,8,4,3,9,0,2];
console.log(arr);

arr.sort((a,b)=>a-b);

arr.sort((a,b)=>b-a);

console.log(arr);
console.log(arr);

const newArr = [5,8,4,3,9,0,2];
const arr1 = [...newArr];
const arr2 = [...newArr];

console.log(newArr);

arr1.sort((a,b)=>a-b);

arr2.sort((a,b)=>b-a);

console.log(arr2);
console.log(arr1);

