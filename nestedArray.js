let nestedArray = 
[
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

console.log("Using for loop")

for(o in nestedArray )
{
	for(i in nestedArray[o])
	{
		console.log(nestedArray[o][i])
	}
}

console.log(" ")

console.log("Using forEach loop")
nestedArray.forEach((n)=>
{
	n.forEach((i)=>
	{
		console.log(i)
	})
}
)
console.log(" ")