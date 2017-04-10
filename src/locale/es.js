export default {
  y(c) { return `año${c === 1 ? '' : 's'}`; },
  mo(c) { return `mes${c === 1 ? '' : 'es'}`; },
  w(c) { return `semana${c === 1 ? '' : 's'}`; },
  d(c) { return `día${c === 1 ? '' : 's'}`; },
  h(c) { return `hora${c === 1 ? '' : 's'}`; },
  m(c) { return `minuto${c === 1 ? '' : 's'}`; },
  s(c) { return `segundo${c === 1 ? '' : 's'}`; },
  ms(c) { return `milisegundo${c === 1 ? '' : 's'}`; },
  decimal: ',',
};
