export default {
  y(c) { return `ann${c === 1 ? 'o' : 'i'}`; },
  mo(c) { return `mes${c === 1 ? 'e' : 'i'}`; },
  w(c) { return `settiman${c === 1 ? 'a' : 'e'}`; },
  d(c) { return `giorn${c === 1 ? 'o' : 'i'}`; },
  h(c) { return `or${c === 1 ? 'a' : 'e'}`; },
  m(c) { return `minut${c === 1 ? 'o' : 'i'}`; },
  s(c) { return `second${c === 1 ? 'o' : 'i'}`; },
  ms(c) { return `millisecond${c === 1 ? 'o' : 'i'}`; },
  decimal: ',',
};
