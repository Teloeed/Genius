//код для чтение числа из окна и выведения в консоль

/* console.log(document);

const inputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button');
buttonRef.addEventListener('click', () => {
  console.log(inputRef.value);
});
console.log(inputRef.value); */

console.log(document);

const addNumber = number => {
  let summ = Number(number) + 10;
  return console.log(summ);
};

const inputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button');
buttonRef.addEventListener('click', () => {
  addNumber(inputRef.value);
});
