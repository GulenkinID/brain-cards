export const shuffle = (arr) => {
	// let m = arr.length, t, i;
	// while(m) {
	// 	i = Math.floor(Math.random() * m--);
		
	// 	t = arr[m];
	// 	arr[m] = arr[i];
	// 	arr[i] = t;

	// 	return arr;
	// }
	const shuffleArr = arr.sort(() => Math.random() - 0.5); 
  return shuffleArr;
};