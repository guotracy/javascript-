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
  如果要排序数组下表从p到r之间的一组数据，我们选择p到r之间的任意一个数据作为pivot
  遍历p到r之间的数据，将小于pivot的放左边，将大于pivot的放右边，将pivot放中间。
  这一步骤之后，数组p到r之间的数据分为3部分，前面p到q-1之间都是小于pivot的，中间是pivot，
  后面q+ 1到r之间是大于pivot的。
  根据分治、递归处理思想，我们可以用递归排序小标从p到q-1之间的数据和小标从去+ 1到r
  之间的数据，知道区间缩小为1，就说明所有的数据都是有序
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

/*归并排序
  如果要排序一个数组，先把数组从中间分成前后两个部分，然后对前后两部分分班排序，再讲排好序
  的两部分分合并在一起，这样整个数组就有序了
*/

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  
  return mergeArr(mergeSort(left), mergeSort(right))
}

const mergeArr = (left, right) => {
  let temp = []
  let leftIndex = 0
  let rightIndex = 0

  while (left.length > leftIndex && right.length > rightIndex){
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }

  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

/*计数排序
  适用于当要排序n个数据，所处的范围并不大，比如最大值是k，我们可以划分成k+1个桶，每个桶的数据都一样，省去了桶内排序的问题
*/
const countingSort = (arr = []) => {
  const length = arr.length
  if (length <= 1) return 
  const maxVal = Math.max(...arr)
  const classifyArr = new Array(maxVal + 1).fill(0)
  const classifyArrLength = classifyArr.length
  const resutArr = []
  
  for (let i = 0; i < length; i++) {
     const arrItem = arr[i]
     classifyArr[arrItem] = ++classifyArr[arrItem]
  }

  classifyArr.forEach((item, index) => index > 0 && (classifyArr[index] = item + classifyArr[index -1]))

  //从后往前是为了排序的稳定性
  for (let j = length -1; j >= 0; j--) {
    let index = classifyArr[arr[j]]
    resutArr[index-1] = arr[j]
    classifyArr[arr[j]]--
  }

  return resutArr
}