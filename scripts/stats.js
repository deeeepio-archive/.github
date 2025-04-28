import fs from "node:fs";

const template = fs.readFileSync("scripts/stats-template.md", "utf-8");
const stats = fs.readFileSync("stats", "utf-8");

template.replace("{{stats}}", stats);

fs.writeFileSync("profile/README.md", template);

console.log("Stats updated");
