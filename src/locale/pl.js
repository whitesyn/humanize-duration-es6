function getPolishForm(c) {
  if (c === 1) {
    return 0;
  } else if (Math.floor(c) !== c) {
    return 1;
  } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
    return 2;
  }
  return 3;
}

export default {
  y(c) { return ['rok', 'roku', 'lata', 'lat'][getPolishForm(c)]; },
  mo(c) { return ['miesiąc', 'miesiąca', 'miesiące', 'miesięcy'][getPolishForm(c)]; },
  w(c) { return ['tydzień', 'tygodnia', 'tygodnie', 'tygodni'][getPolishForm(c)]; },
  d(c) { return ['dzień', 'dnia', 'dni', 'dni'][getPolishForm(c)]; },
  h(c) { return ['godzina', 'godziny', 'godziny', 'godzin'][getPolishForm(c)]; },
  m(c) { return ['minuta', 'minuty', 'minuty', 'minut'][getPolishForm(c)]; },
  s(c) { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getPolishForm(c)]; },
  ms(c) { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getPolishForm(c)]; },
  decimal: ',',
};
