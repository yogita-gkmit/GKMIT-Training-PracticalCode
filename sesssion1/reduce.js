const arr = [4,3,5,9,7,4];

let newArr = arr.reduce((acc,e,i)=>{
	console.log("acc", acc, i);
	return acc+i;
})

console.log(newArr);

const nestedArr = 
	[
		[1,2],
		[3,4],
		[5,6],
		[6,7],
		[7,8],
		[8,9]
	]
let arr1 = [...nestedArr]
console.log(arr1);
	// [1,2], [3,4]...

let newNestedArr = nestedArr.reduce((acc,e,i)=>{
	// return acc.concat(e)
	return [...acc, ...e];
},[]).map((e)=>e*2)
console.log(newNestedArr);

// [1,2,3,4,5,6,6,7,7,8,9]
const arrObj = 
	[
		{name: 'abc', address: 'Udaipur'},
		{name:'def', address: 'Delhi'},
		{name:'ghi', address: 'Amritsar'},
		{name: 'jkl', address: 'Udaipur'}
	]

let newArrObj = arrObj.reduce((acc,e,i)=>{
	(acc[e.address]=acc[e.address] || []).push(e);
	return acc;
},{})
console.log(newArrObj);


arr.reduce((acc, num)=> {

},)