

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?


// While you are traversing the list, change the current node's next pointer to point to its previous element. 
// Since a node does not have reference to its previous node, you must store its previous element beforehand. 
// You also need another pointer to store the next node before changing the reference. 
// Do not forget to return the new head reference at the end!


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // let prev = null; 
    // let current = head;
    let [prev, current] = [null, head];
    while(current) {
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
};


// Runtime: 72 ms, faster than 34.92% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 38.1 MB, less than 5.06% of JavaScript online submissions for Reverse Linked List.


// Time Complexity: O(n), Linear - traverse linked list only once
// Space Complexity: O(1), Constant - we will only have 2 pointers regardless of size of input; prev and temp
