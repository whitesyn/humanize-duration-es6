export default {
  y(c) { return `ano${c === 1 ? '' : 's'}`; },
  mo(c) { return c !== 1 ? 'meses' : 'mês'; },
  w(c) { return `semana${c === 1 ? '' : 's'}`; },
  d(c) { return `dia${c === 1 ? '' : 's'}`; },
  h(c) { return `hora${c === 1 ? '' : 's'}`; },
  m(c) { return `minuto${c === 1 ? '' : 's'}`; },
  s(c) { return `segundo${c === 1 ? '' : 's'}`; },
  ms(c) { return `milissegundo${c === 1 ? '' : 's'}`; },
  decimal: ',',
};
