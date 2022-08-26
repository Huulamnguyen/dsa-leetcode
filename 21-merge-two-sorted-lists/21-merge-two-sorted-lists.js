/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if(!list1) return list2
    if(!list2) return list1
    
    
    let val1 = list1.val;
    let val2 = list2.val;
    
    let mergedNode;
    
    if (val1 < val2){
        mergedNode = new ListNode(val1);
        mergedNode.next = mergeTwoLists(list1.next, list2)
    } else {
        mergedNode = new ListNode(val2);
        mergedNode.next = mergeTwoLists(list2.next, list1)
    }
    return mergedNode;
};