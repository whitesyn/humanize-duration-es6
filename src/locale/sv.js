export default {
  y: 'år',
  mo: c => `månad${c === 1 ? '' : 'er'}`,
  w: c => `veck${c === 1 ? 'a' : 'or'}`,
  d: c => `dag${c === 1 ? '' : 'ar'}`,
  h: c => `timm${c === 1 ? 'e' : 'ar'}`,
  m: c => `minut${c === 1 ? '' : 'er'}`,
  s: c => `sekund${c === 1 ? '' : 'er'}`,
  ms: c => `millisekund${c === 1 ? '' : 'er'}`,
  decimal: ',',
};
