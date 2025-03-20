sum = (a,b) => {return console.log("Arrow Function Addition: "+(a+b))}
sum(5,6)

const add = (a,b) => {return a+b}
console.log(add(5,4))

const multi = (a,b = 2)=> {return a*b}
console.log(multi(4,5))
console.log(multi(4))
