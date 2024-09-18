const array = [2,3,5,7,8,9];
for(let i=0; i<array.length; i++){
	if(array[i]===0) console.log(array[i]);
}


const arr = 
	[
		{name:'abc', address:'udaipur', mobile:123456779},
		{name:'def', address:'delhi', mobile:123456786},
		{name:'ghi', address:'amritsar', mobile:123456788}
	]

arr.forEach(i=>{
	console.log(`${i.name} ${i.address}`);
})

let newArr1 = arr.map(i=>{
	return `${i.name}`;
})
console.log(newArr1);

arr.forEach(i=>{
	if((i.mobile)%2===0) console.log(`${i.name} ${i.address}`);
})

let newArr = arr.map(i=>{
	if((i.mobile)%2===0){
		if((i.mobile)%2===0) return `${i.name}`;
	}
})
console.log(newArr);


