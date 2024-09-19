const arr = [5,8,4,3,9,0,2];
console.log(arr);


// it will sort once then it will not because of deep copy
arr.sort((a,b)=>a-b);

arr.sort((a,b)=>b-a);

console.log(arr);
console.log(arr);


// this is how we will solve the above problem
const newArr = [5,8,4,3,9,0,2];
const arr1 = [...newArr];
const arr2 = [...newArr];

console.log(newArr);

arr1.sort((a,b)=>a-b);

arr2.sort((a,b)=>b-a);

console.log(arr2);
console.log(arr1);



// sort in objects

const arrObj = 	
[
	{name:'ghi', number:123},
	{name:'def', number:789},
	{name:'abc', number:456}
]

arrObj.sort((a,b)=>{
	if(a.name>b.name) return 1;
	else return -1;
	// return a[name].localeCompare(b.name)
})
console.log(arrObj);

arrObj.sort((a,b)=>{
	return a.number - b.number;
})

console.log(arrObj);

// sort both mixed numbers and string in an array

const mixedArr = ['abc', 123, 'zxy', 897, 432, 'ghi', 647];

mixedArr.sort((a,b)=>{
	if(typeof a==='number' && typeof b==='number')	return a-b;
	if(typeof a==='number') return -1;
	if(typeof b==='number') return 1;
	else return a>b?1:-1;
})

console.log(mixedArr);

