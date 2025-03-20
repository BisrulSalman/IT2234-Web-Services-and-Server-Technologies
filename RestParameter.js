let total = 0
const mysum = (...n) =>
{
	//console.log(n)
	
	for(let i=0; i<n.length; i++)
	{
		total += n[i];
	}
	 console.log(total)
	
	//using forEach
	console.log("Using ForEach")
	let t = 0
	n.forEach((i) =>t = t + i)
	console.log(t)

}

mysum(4,5,6,7,8,9)

console.log("Reduce Function")
 const mysums = (...n) =>
 {
	 return n.reduce((t,i)=> t= t+i)
 }
 
 console.log(mysums(4,5,6,8,7))
 
  const greet = (msg,fun)=>{console.log("Hi.. "+msg) 
 fun();}
 
 greet("Good Morning",()=>{console.log("My name is David")})


const multtwo = (n)=>n*2

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multtwo,4,5,6,7,8,9)