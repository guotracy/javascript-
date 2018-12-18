/*冒泡排序
  相邻两个元素比较，将最大的元素移动到数组尾部，一次冒泡会让至少一个元素移动到他对应的位置，
  为了保证冒泡排序的稳定性，相邻两个元素大小相等时，不做交换
*/
const bubbleSort = (arr = []) => {
  const length = arr.length
  if (length <= 1) return

  for(let i = 0; i < length; i++) {
    let hasChange = false
    for(let j = 0; j < length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        hasChange = true
      }
    }
    if (!hasChange) break
  }
}

/*插入排序
  将数组分为两个区间，已排序区间，未排序区间，初始已排序区间只有一个元素，就是数组的第一个元素，
  插入算法的核心就是取未排序区间的元素，在已排序的区间找到合适的位置将其插入，并保证已排序区间的有序性
*/
const insertionSort = (arr = []) => {
  const length = arr.length
  if (length < 1) return 

  for(let i = 1; i < length; i++) {
    const value = arr[i]
    let j = i -1
    for(let j = i -1; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = value
  }
}

/*选择排序
  选择排序也区分已排区间和未排区间，从未排区间选出最小的元素，将其放入已排区间末尾
*/
const selectionSort = (arr = []) => {
  const length = arr.length
  if (length < 1) return 
  for(let i = 0; i < length - 1; i++) {
    let minIndex = i
    for(let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}

/*快速排序

*/
const quickSort = (arr = [], left = 0, right = arr.length -1) => {
  if (left < right) {
    let pivot = right,
        pivotPosition = partition(arr, pivot, left, right)
    quickSort(arr, left, pivotPosition - 1 < left ? left : pivotPosition - 1)
    quickSort(arr, pivotPosition + 1 > right ? right : pivotPosition + 1, right)
  }
}

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const partition = (arr, pivot, left, right) => {
  const pivotVal = arr[pivot]
  let startIndex = left

  for(let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
       swap(arr, i, startIndex)
       startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}