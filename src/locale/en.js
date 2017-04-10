export default {
  y: c => `year${c === 1 ? '' : 's'}`,
  mo: c => `month${c === 1 ? '' : 's'}`,
  w: c => `week${c === 1 ? '' : 's'}`,
  d: c => `day${c === 1 ? '' : 's'}`,
  h: c => `hour${c === 1 ? '' : 's'}`,
  m: c => `minute${c === 1 ? '' : 's'}`,
  s: c => `second${c === 1 ? '' : 's'}`,
  ms: c => `millisecond${c === 1 ? '' : 's'}`,
  decimal: '.',
};
