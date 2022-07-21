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

// hat that follows the bass line
const hithat = {
  notes: 'c2',
  pattern: patterns.ch.repeat(4),
  subdiv: '16n',
};

// hat that strikes when snare is not playing
const hithatVariant = {
  notes: 'c2',
  pattern: patterns.chVariant.repeat(4),
  subdiv: '8n',
};

// We need a break, something 1 2 3 1234 => xxx[xxxx]
// Same beat leading to a drop 1 2 1234 sh => xxxx xx[xxxx]-

module.exports = { kick, snare, hithat, hithatVariant };
