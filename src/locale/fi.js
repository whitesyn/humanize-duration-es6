export default {
  y(c) { return c === 1 ? 'vuosi' : 'vuotta'; },
  mo(c) { return c === 1 ? 'kuukausi' : 'kuukautta'; },
  w(c) { return `viikko${c === 1 ? '' : 'a'}`; },
  d(c) { return `päivä${c === 1 ? '' : 'ä'}`; },
  h(c) { return `tunti${c === 1 ? '' : 'a'}`; },
  m(c) { return `minuutti${c === 1 ? '' : 'a'}`; },
  s(c) { return `sekunti${c === 1 ? '' : 'a'}`; },
  ms(c) { return `millisekunti${c === 1 ? '' : 'a'}`; },
  decimal: ',',
};
