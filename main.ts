import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-star review, written by a house cat about its human.
// Specific complaint (the laptop keyboard), feline voice, sting at the end.
const REVIEW =
  "One star. He types on MY keyboard all day, then has the nerve to close the laptop on my tail. I left a hairball in his shoe. Fair trade.";

const outPath = "/output/entry.txt";

// Gate check: the entry must be 1-200 characters, a single line, not blank.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`Review must be 1-200 characters, got ${REVIEW.length}`);
}
if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
  throw new Error("Review must be a single line");
}
if (REVIEW.trim().length === 0) {
  throw new Error("Review must not be blank");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${outPath}`);
