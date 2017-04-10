export default {
  y: 'år',
  mo(c) { return `måned${c === 1 ? '' : 'er'}`; },
  w(c) { return `uge${c === 1 ? '' : 'r'}`; },
  d(c) { return `dag${c === 1 ? '' : 'e'}`; },
  h(c) { return `time${c === 1 ? '' : 'r'}`; },
  m(c) { return `minut${c === 1 ? '' : 'ter'}`; },
  s(c) { return `sekund${c === 1 ? '' : 'er'}`; },
  ms(c) { return `millisekund${c === 1 ? '' : 'er'}`; },
  decimal: ',',
};
