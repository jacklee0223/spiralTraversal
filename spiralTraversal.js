const el = $('tbody').children()
let matrixInput = [];

for (let i=0; i<el.length; i++) {
	let temp = [];

	for (let j=0; j<el[i].children.length; j++) { 
		temp.push(Number(el[i].children[j].innerHTML));
	}
	matrixInput.push(temp)
}

spiralTraverse = (matrix) => {
	// save column length
	const colLen = matrix[0].length;
	// save row length
	const rowLen = matrix.length;
	// initialize top index at 0
	let topIdx = 0;
	// initialize bottom index at row length - 1
	let botIdx = rowLen - 1;
	// initialize left index at 0
	let leftIdx = 0;
	// initialize right index at column length - 1
	let rightIdx = colLen - 1;
	// initialize position at top
	let position = 'top';
	// initialize results array
	let result = [];
	// initialize temporary loop index
	let i;

	// while left index is smaller or equal to right index and top index is smaller or equal to bottom index
	while (leftIdx <= rightIdx && topIdx <= botIdx) {
		// if position is top
		if (position === 'top') {
			// loop through the row at top index from left to right
			for (i=leftIdx; i<=rightIdx; i++) {
				// push elemnt to result
				result.push(matrix[topIdx][i]);
			}
			// increment top index
			topIdx++;
			// change position to right
			position = 'right'
		}

		// if position is right
		if (position === 'right') {
			// loop through the column at right index from top to bottom
			for (i=topIdx; i<=botIdx; i++) {
				// push elemnt to result
				result.push(matrix[i][rightIdx]);
			}
			// decrement right index
			rightIdx--;
			// change position to bottom		
			position = 'bottom'
		}

		// if position is bottom
		if (position === 'bottom') {
			// loop through the row at bottom index from right to left
			for (i=rightIdx; i>=leftIdx; i--) {
				// push elemnt to result
				result.push(matrix[botIdx][i]);
			}
			// decrement bottom index
			botIdx--;
			// change position to left		
			position = 'left'
		}

		// if position is left
		if (position === 'left') {
			// loop through the column at left index from bottom to top
			for (i=botIdx; i>=topIdx; i--) {
				// push elemnt to result
				result.push(matrix[i][leftIdx]);
			}
			// increment left index
			leftIdx++;
			// change position to top	
			position = 'top';
		}
	}

	return result;
}

$('#spiralAction').click(function() {
	const output = spiralTraverse(matrixInput);
	$(this).parent().append(output)
})
