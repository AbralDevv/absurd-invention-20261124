// One-Sentence Absurd Invention Pitch — revised entry (Neon FINAL line, typed verbatim).
// Writes the line verbatim to entry.txt in the grader's output dir —
// $MAKEFUN_OUTPUT_DIR first, then /output, then ./output; no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = `A kitchen cabinet with a miniature guillotine that executes any Tupperware tub missing its lid for 30 days, solving the avalanche problem on day 31 and leaving me eating Tuesday's chili out of a clean dustpan.`;

const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"].filter(Boolean) as string[];
let written = false;
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
    written = true;
    break;
  } catch {
    // Directory not writable (e.g. read-only repo dir) — try the next fallback.
  }
}
if (!written) throw new Error("could not write entry.txt to any output dir");
