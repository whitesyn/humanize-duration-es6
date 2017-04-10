function getSlavicForm(c) {
  if (Math.floor(c) !== c) {
    return 2;
  } else if ((c % 100 >= 5 && c % 100 <= 20) || (c % 10 >= 5 && c % 10 <= 9) || c % 10 === 0) {
    return 0;
  } else if (c % 10 === 1) {
    return 1;
  } else if (c > 1) {
    return 2;
  }
  return 0;
}

export default {
  y(c) { return ['років', 'рік', 'роки'][getSlavicForm(c)]; },
  mo(c) { return ['місяців', 'місяць', 'місяці'][getSlavicForm(c)]; },
  w(c) { return ['неділь', 'неділя', 'неділі'][getSlavicForm(c)]; },
  d(c) { return ['днів', 'день', 'дні'][getSlavicForm(c)]; },
  h(c) { return ['годин', 'година', 'години'][getSlavicForm(c)]; },
  m(c) { return ['хвилин', 'хвилина', 'хвилини'][getSlavicForm(c)]; },
  s(c) { return ['секунд', 'секунда', 'секунди'][getSlavicForm(c)]; },
  ms(c) { return ['мілісекунд', 'мілісекунда', 'мілісекунди'][getSlavicForm(c)]; },
  decimal: ',',
};
