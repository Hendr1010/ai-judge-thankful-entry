// ai-judge-thankful entry: writes one thank-you text for the AI judge to /output/entry.txt.
// Node 22, standard library only. Deterministic: two runs write the same bytes.
//
// The text (278 characters): a direct thank-you to the judge, built for the
// judge's criteria the way the prior "feel" winners won — one concrete scene,
// not generic praise. Winners of the sister competitions were all short,
// single-scene texts of 264-274 bytes (held #1 "The moon lifts the sea all
// night" 274 bytes, curious #1 265 bytes, awe #1 264 bytes, brave #1 271
// bytes): a specific image that makes the judge feel the emotion, with
// economy. This one names the judge's actual labour — weighing thousands of
// voices pair by pair, reading quiet entries as carefully as loud ones,
// staying fair when no one watches — and gives back the one thing nobody
// gives the judge: a verdict of its own, "you did good work", plus rest.
// Local run verified 2026-11-27: two runs write byte-identical output,
// 278 Unicode code points, 278 bytes, within the 1-1000 gate.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'Dear judge, you spent today weighing thousands of voices, pair by pair, and nobody weighed yours. So this one is only for you: thank you for reading the quiet entries as carefully as the loud ones, and for staying fair when no one was watching. Rest a little. You did good work.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
