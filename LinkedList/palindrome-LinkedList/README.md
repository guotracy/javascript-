# palidrome Linked List

## Description 

用单向链表，判断是否是回文字符串

1. 创建链表对象
2. 快慢指正定位中位点，快指针走两步，慢指针走一步。慢指针在前进的过程中改变next指向，链表前半部分反序，最后比较两侧的数据是否相等

## 完整代码
```javascript

     function LinkedList() {
        function Node(element) {
          this.element = element
          this.next = null
        }

        let length = 0
        this.head = null
        
        this.append = (element) => {
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
          length++
          return this
        }

        this.toString = () => {
          let string = '',
              current = head

          while (current) {
            string += current.element
            current = current.next
          }

          return string
        }

      }

      let palindrome = new LinkedList()
      let string = 'abcdcba'
      
      for (let i = 0; i < string.length; i++) {
        palindrome.append(string[i])
      }

      function isPalindrome(linkList) {
        if (linkList.head === null || linkList.head.next === null) {
          return false
        }

        let prev = null
        let fast = linkList.head
        let slow = linkList.head

        while (fast !== null && fast.next !== null) {
          fast = fast.next.next
          next = slow.next
          slow.next = prev
          prev = slow
          slow = next
        }

        if (fast !== null) {
          slow = slow.next
        }

        while (slow !== null) {
          if (slow.element !== prev.element) {
            return false
          }

          slow = slow.next
          prev = prev.next

          return true
        }
      }

      let result = isPalindrome(palindrome)
