//find the common elements between the two arrays
a = [4,5,6,3,7]
b = [8,3,2,1,5]

a.forEach
(
	(k)=>{
		b.forEach(
		 (m)=>
		 {
			 if(k==m)
			 {
				 console.log(m)
			 }
		 }
		)
	}
)