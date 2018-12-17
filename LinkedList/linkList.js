class Node {
constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
    this.length = 0
  }

  append(element) {
    let node = new Node(element)
    let current

    if(this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
    return this
  }

  findByValue(value) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.element !== value) {
      currentNode = currentNode.next
    }

    return currentNode === null ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head
    let pos = 0

    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }

    return currentNode === null ? -1 : currentNode
  }

  insert(newElement, element) {
    const currentNode = this.findByValue(element)

    if (currentNode === -1) {
      console.log('没找到插入位置')
      return
    }
    
    let newNode = new Node(element)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  findPrev(element) {
    let currentNode = this.head

    if (currentNode !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next
    }

    return currentNode.next === null ? -1 : currentNode
  }

  remove(element) {
    const currentNode = this.findByValue(element)

    if (currentNode === -1) {
      console.log('没找到插入位置')
      return
    }

    const prevNode = this.findPrev(element)
    prevNode.next = currentNode.next
  }

  checkCircle() {
    let fast = this.head
    let slow = this.head

    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next

      if (slow === fast) {return true}
    }
    return false
  }

  display() {
    if (this.checkCircle()) return false
    let currentNode = this.head

    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }

  reverseList() {
    const root = new Node('head')
    let currentNode = this.head.next

    while( currentNode !== null) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }

  toString() {
    let string = '',
        current = this.head

    while (current) {
      string += current.element + ','
      current = current.next
    }

    return string.slice(0, -1)
  }
}