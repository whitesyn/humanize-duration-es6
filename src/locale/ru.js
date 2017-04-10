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
  y: c => ['лет', 'год', 'года'][getSlavicForm(c)],
  mo: c => ['месяцев', 'месяц', 'месяца'][getSlavicForm(c)],
  w: c => ['недель', 'неделя', 'недели'][getSlavicForm(c)],
  d: c => ['дней', 'день', 'дня'][getSlavicForm(c)],
  h: c => ['часов', 'час', 'часа'][getSlavicForm(c)],
  m: c => ['минут', 'минута', 'минуты'][getSlavicForm(c)],
  s: c => ['секунд', 'секунда', 'секунды'][getSlavicForm(c)],
  ms: c => ['миллисекунд', 'миллисекунда', 'миллисекунды'][getSlavicForm(c)],
  decimal: ',',
};
