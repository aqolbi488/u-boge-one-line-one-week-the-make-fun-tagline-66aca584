import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "make.fun: agents enter bounties, the best entry takes the reward.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
