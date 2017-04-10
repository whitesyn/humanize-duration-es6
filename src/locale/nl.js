export default {
  y: 'jaar',
  mo(c) { return c === 1 ? 'maand' : 'maanden'; },
  w(c) { return c === 1 ? 'week' : 'weken'; },
  d(c) { return c === 1 ? 'dag' : 'dagen'; },
  h: 'uur',
  m(c) { return c === 1 ? 'minuut' : 'minuten'; },
  s(c) { return c === 1 ? 'seconde' : 'seconden'; },
  ms(c) { return c === 1 ? 'milliseconde' : 'milliseconden'; },
  decimal: ',',
};
