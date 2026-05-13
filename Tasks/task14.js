function change(times) {
	let x = [3, 3, 3, 3, 3, 3, 3]
	for (let i = 0; i < x.length; i++) {
		  let j = 1; 
		  while (j <= times) {
			  if (i >= j && i < x.length - j) {
				  x[i]--; 
			  }
			  j++; 
		  }
	  }
	  console.log(x)
	  return x; 
  }

  