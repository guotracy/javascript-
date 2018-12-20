/*将两个有序数组合并成一个有序数组
  递归方式实现
*/

const merginOrderedArray = (arr1, arr2) => {
  let _arr = [],
      length1 = arr1.length,
      length2 = arr2.length
  const movePointer = (i = 0, j = 0) => {
    if (i < length1 || j < length2) {
      if (j >= length2 || arr1[i] <= arr2[j]) {
        _arr.push(arr1[i])
        movePointer(++i, j)
      } else if (i >= length1 || arr2[j] < arr1[i]) {
        _arr.push(arr2[j])
        movePointer(i, ++j)
      }
    }
  
  }
  movePointer()
}

// const arr1 = [11, 16, 22,23, 25, 67, 68, 69]
// const arr2 = [12, 13, 14, 15, 28, 33, 54, 65, 70]

// merginOrderedArray(arr1, arr2)