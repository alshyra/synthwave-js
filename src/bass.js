const chords = require('./chords');
const patterns = require('./patterns');
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

/**
 * This will be use for the bass line
 * @param {string} chord eg Am_3
 * @returns 
 */
const chordsToTonic = (chord) =>
  chord.toUpperCase().split('M_')[0] + chord.toUpperCase().split('M_')[1];

/**
 * Then a bass based on the chords
 * @param {string} chords eg: Am_3 Am_3 Dm_4 GM_4 Em_4 FM_4 FM_4
 * @returns tonic of each chords
 */
const getBassLine = (songChords) =>
  songChords
    .split(' ')
    .map(chordsToTonic)
    .map((chord) => `${chord} `.repeat(16))
    .join(' ')
    .split(' ')
    .filter((chord) => chord !== '');

const bassLine = getBassLine(chords);

// First i'm going to generate a simple bass pedal
const pedalBass = {
  notes: 'a3',
  pattern: patterns.kick.repeat(16),
  subdiv: '16n',
};

const chordBass = {
  notes: bassLine,
  pattern: patterns.kick.repeat(32),
  subdiv: '16n',
};

module.exports = { pedalBass, chordBass };
