// First import the scribble library
const scribble = require('scribbletune');

/**
 * Then we will decide wich chords we will use in the song
 * For de demonstation we will use chords of the minor scale but feel free to do otherwise
 */

/**
 * Available minor chords are i ii III iv v VI VII
 * Capital case is used for major chords
 * Lowercase is used for minor chords
 * @returns {array<string>}
 */
const getMinorChords = () => {
  const minorChords = scribble.getChordDegrees('minor');
  console.log('These are chords of the minor scale', minorChords);
  return minorChords;
};

/**
 * You can base your chord progression on the minor chords
 * @param {number} numberOfChords default 4
 * @returns {string[]}
 */
const getMinorChordsProgression = (numberOfChords = 4) => {
  const minorChordProgression = scribble.progression('m', numberOfChords);
  console.log(
    `These are ${numberOfChords} chords in the minor scale`,
    minorChordProgression
  );
  return minorChordProgression;
};

// You can use thoses functions to get the chords to use.
getMinorChords();
getMinorChordsProgression();
// eg: const progression = getMinorChordsProgression();

// I will use the following chords for the demo
const progression = ['i', 'i', 'iv', 'VII', 'v', 'VI', 'VI'];
const chords = scribble.getChordsByProgression(
  'A3 minor',
  progression.join(' ')
);
console.log('These are the chords used:', chords);

// These are the patterns used in the song (you can use your own)
// x represent a note played
// - represent a silence
// _ represent a note that keep playing until the next note
const patterns = {
  kick: 'xxxxxxxxxxxxxxxx',
  snare: '-x-x-x-x-x-x-x-x'.repeat(4),
  ch: 'x-xxx-xxx-xxx-xx',
  chords: 'x___x___x___x___'.repeat(4),
  arps: 'x___x___x___x____',
};

// This is the drum midi files generation

// The kick is often on c2 but it mostly depends on your DAW.
scribble.midi(
  scribble.clip({
    notes: 'c2',
    pattern: patterns.kick.repeat(4),
  }),
  './midis/kick.mid'
);

// Again, snare is often on d2 but it still depends on your DAW and VSTs.
scribble.midi(
  scribble.clip({
    notes: 'd2',
    pattern: patterns.snare,
  }),
  './midis/snare.mid'
);

// Same as above
scribble.midi(
  scribble.clip({
    notes: 'c2',
    pattern: patterns.ch,
    subdiv: '8n',
  }),
  './midis/ch.mid'
);

/**
 * Now let's get to the bass part
 * I need to explain the subdivisions syntax.
 * According to the scriible documentation, the subdivisions are:
 * 1m (entire measure/bar)
 * 2m (two measures)
 * 3m (three measures)
 * 4m (four measures)
 * 1n (whole note)
 * 2n (half note)
 * 4n (quarter note)
 * 8n (eighth)
 * 16n (sixteenth) -> this is what we want for the pump effect heavy used in synthwave
 * */

// First i'm going to generate a simple bass pedal
scribble.midi(
  scribble.clip({
    notes: 'a3',
    pattern: patterns.kick.repeat(16),
    subdiv: '16n',
  }),
  './midis/bass.mid'
);

/**
 * Then a bass based on the chords
 * @param {string} chords eg: Am_3 Am_3 Dm_4 GM_4 Em_4 FM_4 FM_4
 * @returns tonic of each chords
 */
const getBassLine = (chords) =>
  chords
    .split(' ')
    .map(
      (chord) =>
        chord.toUpperCase().split('M_')[0] + chord.toUpperCase().split('M_')[1]
    )
    .map((chord) => `${chord} `.repeat(16)).join(' ').split(' ').filter(chord => chord !== '');

const bassLine = getBassLine('Am_3 Am_3 Dm_4 GM_4 Em_4 FM_4');
console.log(bassLine);

scribble.midi(
  scribble.clip({
    notes: bassLine,
    pattern: patterns.kick.repeat(32),
    subdiv: '16n',
  }),
  './midis/bass-chords.mid'
);

// Now we need synth well because it's synthwave remember ?
scribble.midi(
  scribble.clip({
    notes: chords,
    pattern: patterns.chords,
  }),
  './midis/chords.mid'
);

// double each chords
const arps = chords
  .split(' ')
  .map((chord) => `${chord} ${chord}`)
  .join(' ');

// Finally we need an arpegiator
// Don't hesitate to play we this
scribble.midi(
  scribble.clip({
    notes: scribble.arp({ chords: arps, count: 8, order: '01234321' }),
    pattern: patterns.kick.repeat(16),
    subdiv: '16n',
  }),
  './midis/arpegiator.mid'
);
