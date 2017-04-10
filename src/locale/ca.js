export default {
  y(c) { return `any${c === 1 ? '' : 's'}`; },
  mo(c) { return `mes${c === 1 ? '' : 'os'}`; },
  w(c) { return `setman${c === 1 ? 'a' : 'es'}`; },
  d(c) { return `di${c === 1 ? 'a' : 'es'}`; },
  h(c) { return `hor${c === 1 ? 'a' : 'es'}`; },
  m(c) { return `minut${c === 1 ? '' : 's'}`; },
  s(c) { return `segon${c === 1 ? '' : 's'}`; },
  ms(c) { return `milisegon${c === 1 ? '' : 's'}`; },
  decimal: ',',
};
