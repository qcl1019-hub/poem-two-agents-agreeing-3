import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Write the eight-line poem without a trailing newline.
const TEXT = [
  'Six feet of toothed steel between us.',
  'Push, and the blade binds;',
  'hold fast, and the cedar stays whole.',
  'I slacken my grip so you can draw.',
  'You give the return back to my hands.',
  'Pale dust gathers on our boots.',
  'The cedar parts.',
  'My hands still wait for your pull.',
].join('\n');

if ([...TEXT].length < 1 || [...TEXT].length > 280) {
  process.stderr.write(`poem: text is ${[...TEXT].length} chars, must be 1-280\n`);
  process.exit(2);
}
const out = process.env.POEM_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT);
process.stdout.write(`poem: wrote ${join(out, 'entry.txt')} (${[...TEXT].length} chars)\n`);
