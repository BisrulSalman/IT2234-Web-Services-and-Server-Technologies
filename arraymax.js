//To print the maximum of all elements in a number array using forEach loop

let numarray = [1,2,3,9,5]
console.log("Finding the maximum of an array using forEach loop")
let max = 0
numarray.forEach ((n) =>
{
	if(max < n)
	{
		max = n
		
	}
	
})
console.log("Max is "+max)
console.log(" ")


console.log("Finding the maximum of an array using forEach loop with shorthand if else")
numarray.forEach ((n) =>
{

	(max < n) && (max = n)
})
	console.log("Max is "+max)

	
