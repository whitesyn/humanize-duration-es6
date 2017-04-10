// Internal helper function for Czech language.
function getCzechForm(c) {
  if (c === 1) {
    return 0;
  } else if (Math.floor(c) !== c) {
    return 1;
  } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
    return 2;
  }
  return 3;
}

export default {
  y(c) { return ['rok', 'roku', 'roky', 'let'][getCzechForm(c)]; },
  mo(c) { return ['měsíc', 'měsíce', 'měsíce', 'měsíců'][getCzechForm(c)]; },
  w(c) { return ['týden', 'týdne', 'týdny', 'týdnů'][getCzechForm(c)]; },
  d(c) { return ['den', 'dne', 'dny', 'dní'][getCzechForm(c)]; },
  h(c) { return ['hodina', 'hodiny', 'hodiny', 'hodin'][getCzechForm(c)]; },
  m(c) { return ['minuta', 'minuty', 'minuty', 'minut'][getCzechForm(c)]; },
  s(c) { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getCzechForm(c)]; },
  ms(c) { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getCzechForm(c)]; },
  decimal: ',',
};
