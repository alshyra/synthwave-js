const patterns = require('./patterns');

// This is the drum midi files generation

// The kick is often on c2 but it mostly depends on your DAW.
const kick = {
  notes: 'c2',
  pattern: patterns.kick.repeat(4),
};

// Again, snare is often on d2 but it still depends on your DAW and VSTs.
const snare = {
  notes: 'd2',
  pattern: patterns.snare,
};

// Same as above
const hithat = {
  notes: 'c2',
  pattern: patterns.ch,
  subdiv: '8n',
};

module.exports = { kick, snare, hithat };
