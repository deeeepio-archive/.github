import fs from "node:fs";

let template = fs.readFileSync("scripts/stats-template.md", "utf-8");
const stats = fs.readFileSync("stats", "utf-8");

template = template.replace("{{stats}}", stats);

fs.writeFileSync("profile/README.md", template);

console.log("Stats updated");
