//1 завдання
//функція приймає один аргумент,якщо його немає ,то сума 0
function append(num) {
  let sum = num || 0;
//якщо аргумент передали,то добавляємо до суми,якщо ні ,то повертається поточне значення суми
  function innerAppend(nextNum) {
    if (nextNum) {
      sum += nextNum;
      return innerAppend;
    } else {
      return sum;
    }
  }

  return innerAppend;
}
console.log('first task:')
console.log(append(10)(-5)(2)(-3)());//4
console.log(append(2)(5)(7)(1)(6)(5)(11)());//37
//2 завдання
function areAnagrams(str1, str2) {
  // Видаляємо пробіли і перетворюємо рядки на масиви символів
  const arr1 = str1.replace(/\s/g, '').split('');
  const arr2 = str2.replace(/\s/g, '').split('');

  // Перевіряємо, чи мають обидва масиви однакову довжину
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Сортуємо масиви символів
  arr1.sort();
  arr2.sort();

  // Порівнюємо відсортовані масиви
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
console.log('second task:')
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
//3 завдання
//перевіряємо чи об'єкт не null
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
//змінна,в якій буде клон об'єкта
  let clone = Array.isArray(obj) ? [] : {};
//перевіряємо,щоб була власна властивість,а не успадкована 
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}
const obj1 = { name: 'Vanya', age: 14, hobbies: ['soccer', 'reading'] };
const clonedObj = deepClone(obj1);
console.log('third task:')
console.log(clonedObj); // { name: 'Vanya', age: 14, hobbies: ['soccer', 'reading'] }
console.log(obj1 === clonedObj); // false
console.log(obj1.hobbies === clonedObj.hobbies); // false
//4 завданння
function wrapper(func) {
  //об'єкт для збереження результатів викликів
  const cache = {};
//повернення нової функції ,яка є обгорткою для func
  return function(...args) {
    const key = JSON.stringify(args);
//перевірка чи є результат виклику функції
    if (cache.hasOwnProperty(key)) {
      console.log(`${args} from cache`);
      return cache[key];
    } else {
      console.log(`${args} calculated`);
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}
const add = (a, b, c) => a + b + c;

const cachedAdd = wrapper(add);

console.log(cachedAdd(3, 2, 3)); // 8 calculated
console.log(cachedAdd(6, 8, 2)); // 16 calculated
console.log(cachedAdd(3, 2, 3)); // 8 from cache
