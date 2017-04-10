export default {
  y: 'år',
  mo(c) { return `måned${c === 1 ? '' : 'er'}`; },
  w(c) { return `uke${c === 1 ? '' : 'r'}`; },
  d(c) { return `dag${c === 1 ? '' : 'er'}`; },
  h(c) { return `time${c === 1 ? '' : 'r'}`; },
  m(c) { return `minutt${c === 1 ? '' : 'er'}`; },
  s(c) { return `sekund${c === 1 ? '' : 'er'}`; },
  ms(c) { return `millisekund${c === 1 ? '' : 'er'}`; },
  decimal: ',',
};
