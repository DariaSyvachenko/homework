export {};
//1 завдання
function add(num: number): Function {
  let sum: number = num;

  function innerAdd(nextNum: number): number | Function {
      if (nextNum !== undefined) {
          sum += nextNum;
          return innerAdd;
      } else {
          return sum;
      }
  }

  return function next(): number | Function {
      if (arguments.length === 0) {
          return sum;
      } else {
          return innerAdd(arguments[0]);
      }
  };
}

console.log( "Завдання1:",add(3)(7)(7)(2)(6)(5)(1)()) // 31

//2 завдання
function isAnagram(str1: string, str2: string): boolean {
  // Видаляємо всі пробіли і перетворюємо рядки на масиви символів
  const arr1 = str1.replace(/\s/g, '').split('');
  const arr2 = str2.replace(/\s/g, '').split('');

  // Перевіряємо, чи масиви мають однакову довжину
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Сортуємо масиви символів
  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();

  // Порівнюємо відсортовані масиви
  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

// Приклад виклику:
const str1 = "piece";
const str2 = "icepe";

console.log("Завдання2:",isAnagram(str1, str2)); // true
//3 завдання
function deepClone<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone: T;

  if (Array.isArray(obj)) {
    clone = obj.map((item) => deepClone(item)) as T;
  } else {
    clone = {} as T;

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  }

  return clone;
}

// Приклад виклику:
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
//4 завдання
type FunctionCacheKey = string;
type FunctionCacheValue = number;

function wrapper(func: (...args: number[]) => number): (...args: number[]) => number {
  const cache: Map<FunctionCacheKey, FunctionCacheValue> = new Map();

  return (...args: number[]): number => {
    const cacheKey = JSON.stringify(args);

    if (cache.has(cacheKey)) {
      console.log(`Result from cache: ${cache.get(cacheKey)}`);
      return cache.get(cacheKey) as number;
    }

    const result = func(...args);
    cache.set(cacheKey, result);
    console.log(`Result calculated: ${result}`);
    return result;
  };
}

// Приклад використання:
const calc = (a: number, b: number, c: number): number => a + b + c;
const cachedCalc = wrapper(calc);

console.log("Завдання4:");
console.log(cachedCalc(7, 7, 3)); // Result calculated: 13
console.log(cachedCalc(6, 2, 1)); // Result calculated: 9
console.log(cachedCalc(7, 7, 3)); // Result from cache: 13
console.log(cachedCalc(6, 2, 1));// Result from cache: 9