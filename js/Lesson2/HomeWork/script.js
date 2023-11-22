// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// console.log(1 > 0);
// console.log(0 > 0);
// console.log(-3 > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
//тут я решил сделать небольшой массив, чтобы не повторять один и тот же код. Вместо массива использовал объект, потому что массивам нас еще не учили))
// let object = {};
// object.a = 'test';
// object.b = 'qwerty';
// object.c = true;
// for (key in object) console.log(object[key] === 'test');

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
//тут я напишу по юзерски, чтобы показать, что я понимаю, чего вы хотите.
// const a = 1;
// const b = 10;
// const c = 13;
// console.log(a > 10 || a < 10 ? (a > 10 ? a - 5 : a + 5) : a);
// console.log(b > 10 || b < 10 ? (b > 10 ? b - 5 : b + 5) : b);
// console.log(c > 10 || c < 10 ? (c > 10 ? c - 5 : c + 5) : c);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// const month = prompt('Please enter number betveen 1 - 12 (include)');
// switch (Number(month)) {
//   case 1:
//     console.log('January');
//     break;
//   case 2:
//     console.log('February');
//     break;
//   case 3:
//     console.log('March');
//     break;
//   case 4:
//     console.log('April');
//     break;
//   case 5:
//     console.log('May');
//     break;
//   case 6:
//     console.log('Jun');
//     break;
//   case 7:
//     console.log('July');
//     break;
//   case 8:
//     console.log('August');
//     break;
//   case 9:
//     console.log('September');
//     break;
//   case 10:
//     console.log('Octobre');
//     break;
//   case 11:
//     console.log('November');
//     break;
//   case 12:
//     console.log('December');
//     break;
//   default:
//     alert("Ther's no month with this number!");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// const numb = prompt('Please enter three-digit number');
// if (numb.length === 3 && !isNaN(Number(numb))) {
//   console.log(Number(numb[0]) + Number(numb[1]) + Number(numb[2]));
// } else alert('You entered wrong number!');
