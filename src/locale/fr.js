export default {
  y(c) { return `an${c === 1 ? '' : 's'}`; },
  mo: 'mois',
  w(c) { return `semaine${c === 1 ? '' : 's'}`; },
  d(c) { return `jour${c === 1 ? '' : 's'}`; },
  h(c) { return `heure${c === 1 ? '' : 's'}`; },
  m(c) { return `minute${c === 1 ? '' : 's'}`; },
  s(c) { return `seconde${c === 1 ? '' : 's'}`; },
  ms(c) { return `milliseconde${c === 1 ? '' : 's'}`; },
  decimal: ',',
};
