export const harvestPlants = (arr) => {
	let seeds = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].type === "Corn") {
			for (let j = 0; j < arr[i].output / 2; j++) {
				seeds.push(arr[i]);
			}
		} else {
			for (let j = 0; j < arr[i].output; j++) {
				seeds.push(arr[i]);
			}
		}
	}
	return seeds;
};
