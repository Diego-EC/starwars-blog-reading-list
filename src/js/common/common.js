export function ifArrayExistsAndHasData(array) {
	if (Object.keys(array).length === 0 && array.constructor === Object) {
		return true;
	} else {
		return false;
	}
}
