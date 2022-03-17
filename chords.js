const scribble = require('scribbletune');

const chords = scribble.getChordsByProgression('A3 locrian', 'i vi iv v');

console.log(chords);

const c = scribble.clip({
  notes: scribble.arp('Am Dm BbM CM'),
  pattern: 'x'.repeat(32),
  subdiv: '8n'
});

scribble.midi(c, 'arp.mid');
