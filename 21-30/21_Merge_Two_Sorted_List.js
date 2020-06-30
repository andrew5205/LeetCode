// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
//     if ( l1 == null) {
//         return l2;
//     }
//     if( l2 == null) {
//         return l1;
//     }

//     if (l1.val>l2.val) // swap to make sure l1 is always smaller than l2
//         [l1, l2] = [l2, l1]
    
//     l1.next = mergeTwoLists(l1.next, l2)
    
//     return l1;
// };


// Time complexity: O(m+n)
// space complexity: O(1)

// Runtime: 88 ms, faster than 22.96% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 37.7 MB, less than 6.88% of JavaScript online submissions for Merge Two Sorted Lists.

// recursive spproach
function mergeTwoLists(l1, l2) {

    // base case: return the non-empty one
    if ( l1 == null) {
        return l2;
    }
    if( l2 == null) {
        return l1;
    }

    // swap to make sure l1 is always smaller than l2
    if (l1.val > l2.val) {
        [l1, l2] = [l2, l1];
    }
    
    // recursive
    l1.next = mergeTwoLists(l1.next, l2);
    
    return l1;
};




// // iterative approach 
// // still need to work on 

// function mergeTwoLists(l1, l2) {
//     // pointer at each list 
//     let node1 = l1;
//     let node2 = l2;

//     // create a new list 
//     let head = new ListNode();
//     // pointer point at head
//     let current = head;

//     while(node1 && node2) {
//         if( node1.val < node2.val) {
//             current.next = l1;
//             node1 = node1.next;
//         } else {
//             current.next = l2;
//             node2 = node2.next;
//         }
//     }
//     current.next = node1 || node2;
//     return head.next;
// }


