/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    // DFS valid helper function
    const valid = (node, left, right) => {
        if (node === null) return true
        if (!(node.val > left && node.val < right )) return false
        
        // recursive check
        return valid(node.left, left, node.val) && valid(node.right, node.val, right)
    }
    
    return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    
};