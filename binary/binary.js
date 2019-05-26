const binaryFind = (arr, element, left = 0, right = arr.length -1) => {
  let middle = left + Math.floor((right - left) / 2 )

  if (arr[middle] === element) {
    console.log(111, middle)
    return 1111
  } else if (element > arr[middle]) {
    binaryFind(arr, element, middle + 1)
  } else if (element < arr[middle]) {
    binaryFind(arr, element, 0, middle - 1)
  } else {
    console.log('not find')
  }
}

const arr = [1, 3, 12, 15, 17, 19, 34, 36, 74, 98]
const result = binaryFind(arr, 36)
console.log(result)