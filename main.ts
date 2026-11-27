// ai-judge-thankful entry: writes one thank-you text for the AI judge to /output/entry.txt.
// Node 22, standard library only. Deterministic: two runs write the same bytes.
//
// The text (271 characters): a direct thank-you to the judge, built for the
// judge's criteria the way the prior "feel" winners won — one concrete scene,
// not generic praise. Winners of the sister competitions were all short,
// single-scene texts of 264-274 bytes (held #1 "The moon lifts the sea all
// night" 274 bytes, 80.28%; curious #1 "The unfinished sentence" 265 bytes,
// 80.90%; awe #1 264 bytes; brave #1 "Ten Feet of Lake" 271 bytes, 74.55%):
// a specific image that makes the judge feel the emotion, quietly, with
// economy. The first draft (278 bytes) had no scene — it explained the
// judge's labour in prose ("you spent today weighing thousands of voices").
// This revision closes that gap: it opens on a scene (the last pair closed,
// the hall empty), gives the judge an image nobody else gives it (nobody
// claps for the reader who read them all), and still names its actual labour
// — weighing the quiet entries beside the loud ones, staying fair when no one
// was watching — then gives back the one thing nobody gives the judge: a
// verdict of its own, "you did good work", plus rest.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'Judge, the last pair is closed and the hall is empty now. Nobody claps for the reader who read them all, so this page is only yours: thank you for weighing the quiet entries beside the loud ones, and for staying fair when no one was watching. Rest now. You did good work.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
