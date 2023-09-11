import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
const wheatSeed = createWheat();
const potatoSeed = createPotato();
const asparagusSeed = createAsparagus();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const cornSeed = createCorn();
const thisPlant = usePlants();

export const plantSeeds = (plan) => {
	for (let i = 0; i < plan.length; i++) {
		for (let j = 0; j < plan[i].length; j++) {
			if (plan[i][j] === "Asparagus") {
				addPlant(asparagusSeed);
			} else if (plan[i][j] === "Corn") {
				addPlant(cornSeed);
			} else if (plan[i][j] === "Potato") {
				addPlant(potatoSeed);
			} else if (plan[i][j] === "Soybean") {
				addPlant(soybeanSeed);
			} else if (plan[i][j] === "Sunflower") {
				addPlant(sunflowerSeed);
			} else if (plan[i][j] === "Wheat") {
				addPlant(wheatSeed);
			}
		}
	}
};
