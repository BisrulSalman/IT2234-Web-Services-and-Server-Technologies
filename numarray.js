//Initializing and printing elements of a number array
let numarray = [1,2,3,9,5]
console.log("using for loop")
for(var i=0; i<numarray.length; i++)
{
	console.log(numarray[i])
}

console.log(" ")

console.log("using forEach loop")
numarray.forEach ((n) =>
{
	console.log(n)
})
console.log(" ")