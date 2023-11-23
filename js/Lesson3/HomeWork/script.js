//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];
// let result = [];
// fruts.filter(id => result.push(id.name));
// console.log(result);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
//for (let i = 2; i < 10; i++) if (i % 2 === 0) console.log(i);

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let value = prompt('Pls enter value more than 100');
//   if (
//     value == null ||
//     value == 0 ||
//     (!isNaN(Number(value)) && value.length >= 3)
//   )
//     break;
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];
// let ages = 0;
// girls.filter(age1 => (ages += age1.age));
// console.log(ages / girls.length);
