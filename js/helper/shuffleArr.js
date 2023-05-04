export const shuffleArr = (arr) => {
	// let m = arr.length, t, i;
	// while(m) {
	// 	i = Math.floor(Math.random() * m--);
		
	// 	t = arr[m];
	// 	arr[m] = arr[i];
	// 	arr[i] = t;

	// 	return arr;
	// }

	// const array = [...arr];
	// for (let i = array.length - 1; i > 0; i -= 1) {
	// 	const j = Math.floor(Math.random() * (i + 1));
	// 	[array[i], array[j]] = [array[j], array[i]];
	// }
	// return array;

	const array = [...arr];
	return array.sort(() => Math.random() - 0.5); 
	// console.log('arr:', arr, 'array:', array, 'shuffleArr:', shuffleArr);
  // return shuffleArr;
}; 