
//2 завдання
function arrayChangeDelete<T>(array: T[], removeRule: (item: T) => boolean): T[] {
    const deletedElements: T[] = [];
    let i = 0;
  
    while (i < array.length) {
      const item = array[i];
      if (removeRule(item)) {
        deletedElements.push(item);
        array.splice(i, 1);
      } else {
        i++;
      }
    }
  
    return deletedElements;
  }
  
  // Приклад використання:
  const array = [1, 2, 3, 6, 7, 9];
  const deletedElements = arrayChangeDelete(array, (item) => item % 2 === 0);
  
  console.log(array); // [1, 3, 7, 9]
  console.log(deletedElements); // [2, 6]