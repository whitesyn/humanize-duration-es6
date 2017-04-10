export default {
  y: 'ár',
  mo(c) { return `mánuð${c === 1 ? 'ur' : 'ir'}`; },
  w(c) { return `vik${c === 1 ? 'a' : 'ur'}`; },
  d(c) { return `dag${c === 1 ? 'ur' : 'ar'}`; },
  h(c) { return `klukkutím${c === 1 ? 'i' : 'ar'}`; },
  m(c) { return `mínút${c === 1 ? 'a' : 'ur'}`; },
  s(c) { return `sekúnd${c === 1 ? 'a' : 'ur'}`; },
  ms(c) { return `millisekúnd${c === 1 ? 'a' : 'ur'}`; },
  decimal: '.',
};
