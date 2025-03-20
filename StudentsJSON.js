//define 10 students in JSON store in an array 
//find the Female students 
//find the students who are following IT course 
//find the max and avg GPA among the students

let students = 
[
  { "name": "Alice", "course": "IT", "gender": "Female", "GPA": 3.8 },
  { "name": "Bob", "course": "Maths", "gender": "Male", "GPA": 3.5 },
  { "name": "Charlie", "course": "Maths", "gender": "Male", "GPA": 3.9 },
  { "name": "Diana", "course": "Maths", "gender": "Female", "GPA": 3.7 },
  { "name": "Eve", "course": "Bio", "gender": "Female", "GPA": 3.6 },
  { "name": "Frank", "course": "Bio", "gender": "Male", "GPA": 3.4 },
  { "name": "Grace", "course": "IT", "gender": "Female", "GPA": 3.8 },
  { "name": "Henry", "course": "Maths", "gender": "Male", "GPA": 3.2 },
  { "name": "Ivy", "course": "Bio", "gender": "Female", "GPA": 3.9 },
  { "name": "Jack", "course": "IT", "gender": "Male", "GPA": 3.3 }
]


//Finding the Female students
console.log("Female Students") 
let femaleStudents = []

for(let i=0; i<students.length; i++)
{
	if(students[i].gender === "Female")
	{
		console.log(students[i])
	}
}

console.log(" ")

//using filter Function
//let femaleStudents = students.filter(student => student.gender === "Female")
//console.log(femaleStudents)


//Find the students who are following IT course 

console.log("Students following IT")
for(let i=0; i<students.length; i++)
{
	if(students[i].course === "IT")
	{
		console.log(students[i])
	}
}


console.log(" ")
console.log("Maximum GPA")
let maxGPA = 0

for(let i=0; i<students.length; i++)
{
	if(maxGPA < students[i].GPA )
	{
		maxGPA = students[i].GPA
	}
}

console.log(maxGPA)

let totalGPA = 0

for(let i=0; i<students.length; i++)
{
		totalGPA += students[i].GPA
	
}

console.log(" ")
console.log("Average GPA")
let avgGPA = totalGPA/students.length
console.log(avgGPA.toFixed(2))

