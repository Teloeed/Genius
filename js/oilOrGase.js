let oilPrice = 0;
let oilForKm = 0;
let gasPrice = 0;
let gasForKm = 0;

while (true) {
  const temp = parseInt(prompt('Почем сейчас Газ?'));
  if (!isNaN(temp)) {
    gasPrice = temp;
    break;
  }
  alert('Ну не выделывайся, введи целое число!');
}
while (true) {
  const temp = parseInt(prompt('Какой расход Газа на 100 км?'));
  if (!isNaN(temp)) {
    gasForKm = temp;
    break;
  }
  alert('Ну не выделывайся, введи целое число!');
}
while (true) {
  const temp = parseInt(prompt('Почем сейчас Бензин?'));
  if (!isNaN(temp)) {
    oilPrice = temp;
    break;
  }
  alert('Ну не выделывайся, введи целое число!');
}
while (true) {
  const temp = parseInt(prompt('Какой расход Бензина на 100 км?'));
  if (!isNaN(temp)) {
    oilForKm = temp;
    break;
  }
  alert('Ну не выделывайся, введи целое число!');
}
let gas = gasPrice * gasForKm;
let oil = oilPrice * oilForKm;
result = gas < oil ? ((oil - gas) / oil) * 100 : ((gas - oil) / gas) * 100;
alert(
  'На ' +
    (gas < oil ? 'газе' : 'бензине') +
    ' кататься дешевле чем на' +
    (gas < oil ? 'бензине' : 'газе') +
    '! На целых ' +
    result.toFixed(1) +
    '% !!!',
);
