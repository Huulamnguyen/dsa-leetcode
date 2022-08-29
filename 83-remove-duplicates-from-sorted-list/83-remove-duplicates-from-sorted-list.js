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
var deleteDuplicates = function(head) {
    
    if (head === null) return head

    let curr = head
    
    while(curr !== null && curr.next !== null){
        if(curr.next.val === curr.val){
            curr.next = curr.next.next
        }else{
            curr = curr.next
        }    
    }
    
    return head
};