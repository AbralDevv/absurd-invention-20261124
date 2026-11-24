import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const sentence = readFileSync(join(dir, "entry.txt"), "utf8").trim();

// The gate accepts 1–220 characters of non-whitespace text; fail loudly
// rather than writing an entry the scorer would refuse.
if (sentence.length < 1 || sentence.length > 220) {
  throw new Error(`entry.txt must be 1-220 characters, got ${sentence.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
