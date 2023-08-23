function unroll(squareArray) {
	const result = [];
	let top = 0,
		bottom = squareArray.length - 1,
		left = 0,
		right = squareArray[0].length - 1;

	while (top <= bottom && left <= right) {
		// Move right
		for (let i = left; i <= right; i++) {
			result.push(squareArray[top][i]);
		}
		top++;

		// Move down
		for (let i = top; i <= bottom; i++) {
			result.push(squareArray[i][right]);
		}
		right--;

		// Move left
		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				result.push(squareArray[bottom][i]);
			}
			bottom--;
		}

		// Move up
		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				result.push(squareArray[i][left]);
			}
			left++;
		}
	}

	return result;
}

module.exports = unroll;
