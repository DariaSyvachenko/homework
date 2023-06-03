Задача 1.Напишіть функцію add(), яка приймає будь-яку кількість параметрів у такому вигляді: 
console.log( "Завдання1:",add(3)(7)(7)(2)(6)(5)(1)()) // 31
Задача 2. Напишіть функцію, яка бере два рядки і повертає true, якщо вони є анаграмами одне одного. 
const str1 = "piece";
const str2 = "icepe";

console.log("Завдання2:",isAnagram(str1, str2)); // true

Задача 3. Напишіть функцію, яка глибоко клонує об'єкт, переданий їй параметром. 
const originalObj = {
  name: 'Ivan',
  age: 20,
  hobbies: ['soccer', 'basketball'],
  address: {
    city: 'Kyiv',
    country: 'Ukraine'
  }
};

const clonedObj = deepClone(originalObj);

console.log("Завдання3:",clonedObj);
console.log(originalObj === clonedObj); // false
Задача 4. Напишіть функцію-обгортку, яка кешуватиме результат будь-якої іншої функції з довільною кількістю числових параметрів. 
const calc = (a: number, b: number, c: number): number => a + b + c;
const cachedCalc = wrapper(calc);

console.log("Завдання4:");
console.log(cachedCalc(7, 7, 3)); // Result calculated: 13
console.log(cachedCalc(6, 2, 1)); // Result calculated: 9
console.log(cachedCalc(7, 7, 3)); // Result from cache: 13
console.log(cachedCalc(6, 2, 1));// Result from cache: 9
