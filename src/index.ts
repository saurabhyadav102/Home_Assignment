import * as fs from "fs";
import { SalesAgent } from "./types.js";
import { calculateAllocations } from "./allocationCalculator";

// Read input
const file = fs.readFileSync("./data/input.json", "utf-8");
const parsed = JSON.parse(file);

const kitty = parsed.siteKitty;
const salesAgents: SalesAgent[] = parsed.salesAgents;

// Calculate allocations
const result = calculateAllocations(kitty, salesAgents);

// Write output
fs.writeFileSync("./data/output.json", JSON.stringify({ allocations: result }, null, 2));
console.log(JSON.stringify({ allocations: result }, null, 2));
