console.log("Welcome to the main module");
import { createPlan } from "../src/scripts/plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";
const yearlyPlan = createPlan();

console.log(yearlyPlan);
plantSeeds(yearlyPlan);
const toPlant = usePlants();
console.log(toPlant);
const harvest = harvestPlants(toPlant);
console.log(harvest);

let container = document.querySelector(".container");
container.innerHTML = catalog(harvest);
