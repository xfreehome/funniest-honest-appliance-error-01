// Entry for the make.fun bounty "The Funniest Honest Appliance Error".
// Writes a single honest error line (at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR E-11: Unbalanced load. One sock. I have spun it 47 times and it is still alone in there.";

// Gate check (mirrors the competition gate): 1-200 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
