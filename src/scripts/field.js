let field = [];

export const addPlant = (seed) => {
	if (Array.isArray(seed) == true) {
		seed.forEach((part) => field.push(part));
	} else {
		field.push(seed);
	}
};

export const usePlants = () => {
	return field.map((copyOfPlant) => ({ ...copyOfPlant }));
};
