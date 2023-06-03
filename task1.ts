//1 завдання
async function runSequent<T>(
  array: T[],
  callback: (item: T, index: number) => Promise<any>
): Promise<any[]> {
  const results: any[] = [];
  for (let i = 0; i < array.length; i++) {
    const result = await callback(array[i], i);
    results.push(result);
  }
  return results;
}

const arr = ["one", "two", "three"];
runSequent(array, async (item, index) => {
  return {
    item,
    index,
  };
}).then((results) => {
  console.log(results);
});