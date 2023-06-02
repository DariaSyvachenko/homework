"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 завдання
function add(num) {
    var sum = num;
    function innerAdd(nextNum) {
        if (nextNum !== undefined) {
            sum += nextNum;
            return innerAdd;
        }
        else {
            return sum;
        }
    }
    return function next() {
        if (arguments.length === 0) {
            return sum;
        }
        else {
            return innerAdd(arguments[0]);
        }
    };
}
console.log("Завдання1:", add(3)(7)(7)(2)(6)(5)(1)()); // 31
//2 завдання
function isAnagram(str1, str2) {
    // Видаляємо всі пробіли і перетворюємо рядки на масиви символів
    var arr1 = str1.replace(/\s/g, '').split('');
    var arr2 = str2.replace(/\s/g, '').split('');
    // Перевіряємо, чи масиви мають однакову довжину
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Сортуємо масиви символів
    var sortedArr1 = arr1.sort();
    var sortedArr2 = arr2.sort();
    // Порівнюємо відсортовані масиви
    for (var i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}
// Приклад виклику:
var str1 = "piece";
var str2 = "icepe";
console.log("Завдання2:", isAnagram(str1, str2)); // true
//3 завдання
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var clone;
    if (Array.isArray(obj)) {
        clone = obj.map(function (item) { return deepClone(item); });
    }
    else {
        clone = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepClone(obj[key]);
            }
        }
    }
    return clone;
}
// Приклад виклику:
var originalObj = {
    name: 'Ivan',
    age: 20,
    hobbies: ['soccer', 'basketball'],
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    }
};
var clonedObj = deepClone(originalObj);
console.log("Завдання3:", clonedObj);
console.log(originalObj === clonedObj); // false
function wrapper(func) {
    var cache = new Map();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var cacheKey = JSON.stringify(args);
        if (cache.has(cacheKey)) {
            console.log("Result from cache: ".concat(cache.get(cacheKey)));
            return cache.get(cacheKey);
        }
        var result = func.apply(void 0, args);
        cache.set(cacheKey, result);
        console.log("Result calculated: ".concat(result));
        return result;
    };
}
// Приклад використання:
var calc = function (a, b, c) { return a + b + c; };
var cachedCalc = wrapper(calc);
console.log("Завдання4:");
console.log(cachedCalc(7, 7, 3)); // Result calculated: 13
console.log(cachedCalc(6, 2, 1)); // Result calculated: 9
console.log(cachedCalc(7, 7, 3)); // Result from cache: 13
console.log(cachedCalc(6, 2, 1)); // Result from cache: 9
