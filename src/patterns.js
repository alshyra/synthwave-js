// These are the patterns used in the song (you can use your own)
// x represent a note played
// - represent a silence
// _ represent a note that keep playing until the next note
const patterns = {
  kick: 'xxxxxxxxxxxxxxxx',
  snare: '-x-x-x-x-x-x-x-x'.repeat(4),
  ch: 'x-xxx-xxx-xxx-xx',
  chVariant: 'x-x-x-x-x-x-x-x-'.repeat(4),
  chords: 'x___x___x___x___'.repeat(4),
  arps: 'x___x___x___x___',
};

module.exports = patterns;
