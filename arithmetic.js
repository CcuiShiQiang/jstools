/**
 * [swap description] 交换两个变量的值
 * @param  {[type]} array [数组]
 * @param  {[type]} left  [数组左边的值]
 * @param  {[type]} right [数组右边的值]
 */
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}

/*冒泡排序*/
// function bubble (array) {
//   for (let i = 1; i < array.length - 1; i++) {
//     for (let j = 0; j < i; j++) {
//       if (array[j] > array[j + 1]) {
//         swap(array, j, j + 1)
//       }
//     }
//   }
//   return array
// }
function bubble(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // 从 0 到 `length - 1` 遍历
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) swap(array, j, j + 1)
    }
  }
  return array;
}

/*差值排序*/
function insertion(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--)
      swap(array, j, j + 1);
  }
  return array;
}

let a = [2, 1, 3, 4, 6, 5];
insertion(a);
console.log(a);