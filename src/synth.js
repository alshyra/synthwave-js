const scribble = require('scribbletune');
const patterns = require('./patterns.js');
const chords = require('./chords.js');

// Now we need synth well because it's synthwave remember ?
const synth = {
  notes: chords,
  pattern: patterns.chords,
};

// Double each chords
const arpsChords = chords
  .split(' ')
  .map((chord) => `${chord} ${chord}`)
  .join(' ');

// Finally we need an arpegiator
// Don't hesitate to play we this
const arpeggiator = {
  notes: scribble.arp({ chords: arpsChords, count: 8, order: '01234321' }),
  pattern: patterns.kick.repeat(16),
  subdiv: '16n',
};

module.exports = {
  arpeggiator,
  synth,
};
