// Internal helper function for Lithuanian language.
function getLithuanianForm(c) {
  if (c === 1 || (c % 10 === 1 && c % 100 > 20)) {
    return 0;
  } else if (
    Math.floor(c) !== c ||
    (c % 10 >= 2 && c % 100 > 20) ||
    (c % 10 >= 2 && c % 100 < 10)) {
    return 1;
  }
  return 2;
}

export default {
  y(c) { return ((c % 10 === 0) || (c % 100 >= 10 && c % 100 <= 20)) ? 'metų' : 'metai'; },
  mo(c) { return ['mėnuo', 'mėnesiai', 'mėnesių'][getLithuanianForm(c)]; },
  w(c) { return ['savaitė', 'savaitės', 'savaičių'][getLithuanianForm(c)]; },
  d(c) { return ['diena', 'dienos', 'dienų'][getLithuanianForm(c)]; },
  h(c) { return ['valanda', 'valandos', 'valandų'][getLithuanianForm(c)]; },
  m(c) { return ['minutė', 'minutės', 'minučių'][getLithuanianForm(c)]; },
  s(c) { return ['sekundė', 'sekundės', 'sekundžių'][getLithuanianForm(c)]; },
  ms(c) { return ['milisekundė', 'milisekundės', 'milisekundžių'][getLithuanianForm(c)]; },
  decimal: ',',
};
