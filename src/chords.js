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

module.exports = chords;
