const el = $('tbody').children()
let result = [];

for (let i=0; i<el.length; i++) {
	let temp = [];

	for (let j=0; j<el[i].children.length; j++) { 
		temp.push(Number(el[i].children[j].innerHTML));
	}
	result.push(temp)
}

spiralTraverse = (matrix) => {
	// save column length
	// save row length
	// initialize top index at 0
	// initialize bottom index at row length - 1
	// initialize left index at 0
	// initialize right index at column length - 1
	// initialize position at top
	// initialize results array
	// initialize temporary loop index

	// while left index is smaller or equal to right index and top index is smaller or equal to bottom index
		// if position is top
			// loop through the row at top index from left to right
				// push elemnt to result
				// increment top index
				// change position to right

		// if position is right
			// loop through the column at right index from top to bottom
				// push elemnt to result
				// decrement right index
				// change position to bottom		

		// if position is bottom
			// loop through the row at bottom index from right to left
				// push elemnt to result
				// decrement bottom index
				// change position to left		

		// if position is left
			// loop through the column at left index from bottom to top
				// push elemnt to result
				// increment left index
				// change position to top

	// return result
}