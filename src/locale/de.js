export default {
  y(c) { return `Jahr${c === 1 ? '' : 'e'}`; },
  mo(c) { return `Monat${c === 1 ? '' : 'e'}`; },
  w(c) { return `Woche${c === 1 ? '' : 'n'}`; },
  d(c) { return `Tag${c === 1 ? '' : 'e'}`; },
  h(c) { return `Stunde${c === 1 ? '' : 'n'}`; },
  m(c) { return `Minute${c === 1 ? '' : 'n'}`; },
  s(c) { return `Sekunde${c === 1 ? '' : 'n'}`; },
  ms(c) { return `Millisekunde${c === 1 ? '' : 'n'}`; },
  decimal: ',',
};
