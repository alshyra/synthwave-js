// First import the scribble library
const scribble = require('scribbletune');
const drums = require('./src/drums.js');

const synth = require('./src/synth.js');
const bass = require('./src/bass.js');

const exportMidi = (name, clipParam) => {
  scribble.midi(scribble.clip(clipParam), `./midis/${name}.mid`);
};

exportMidi('arpeggiator', synth.arpeggiator);
exportMidi('synth', synth.synth);
exportMidi('bassLine', bass.chordBass);
exportMidi('bassPedal', bass.pedalBass);
exportMidi('kick', drums.kick);
exportMidi('snare', drums.snare);
exportMidi('hat', drums.hithat);
exportMidi('hatVariant', drums.hithatVariant);
