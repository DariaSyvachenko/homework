Задача1.Функція add() приймає перший параметр num, який є обов'язковим. Внутрішня функція addNext() приймає наступні числа як параметри і додає їх до змінної sum. Коли передається пустий параметр, функція addNext() повертає поточну суму sum.

Задача2.Спочатку відбувається видалення зайвих пробілів і розбиття рядків на масиви символів. Потім масиви сортуються, а відсортовані рядки порівнюються. Якщо відсортовані рядки однакові, це означає, що початкові рядки є анаграмами, і функція повертає true. У протилежному випадку, функція повертає false.

Задача3.Функція deepClone перевіряє, чи переданий параметр є об'єктом. Якщо це не об'єкт або null, функція просто повертає його. У іншому випадку, створюється новий об'єкт або масив в залежності від типу об'єкта, а потім рекурсивно клонуються всі його властивості. При виявленні вкладених об'єктів або масивів викликається deepClone для їх глибокого клонування. На виході отримуємо глибоко клонований об'єкт clone.

Задача4.Створюється об'єкт cache для збереження результатів викликів функції.Повертається нова функція, яка є обгорткою для функції func.У першому кроці перевіряється, чи є результат виклику функції для даного набору аргументів. Це виконується за допомогою перевірки властивості cache.hasOwnProperty(key), де key - серіалізований масив аргументів.Якщо результат уже є в кеші, він повертається з кешу, і виводиться повідомлення ${args} from cache.Якщо результату немає в кеші, виводиться повідомлення ${args} calculated, і оригінальна функція func викликається з переданими аргументами ...args для обчислення результату.Отриманий результат зберігається в кеші за ключем key, а потім повертається з функції.
