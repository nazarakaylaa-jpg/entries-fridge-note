// Notes From a Passive-Aggressive Fridge — entry program (pass 2, final).
// Writes one original passive-aggressive note from a smart fridge
// to its owner, to /output/entry.txt.
// The joke: the fridge logs every door-open like a petty clerk,
// then lands the sting — after 47 empty visits, it is no longer
// an appliance, just a cold mirror. Pass 2 tightens pass 1 by
// cutting "very": same image, shorter, punchier rhythm — and fewer
// bytes, which wins the tie-break.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You opened me 47 times today and took nothing. At this point I'm just a cold mirror.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to ${join(outDir, "entry.txt")}`);
