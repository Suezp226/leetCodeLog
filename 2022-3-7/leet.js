/**
 * @param {number[]} nums
 * @return {number}
 */


 var removeDuplicates = function(nums) {
    let j = 0;

    for(let i = 1;i<nums.length;i++) {
        if(nums[i] > nums[j]) {  // 不相等 往前面 push
            ++j;
            nums[j] = nums[i];
        }
    }
    return nums.slice(0,j+1)
};


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s == '') return true
    let map = new Map();
    map.set(')','(');
    map.set('}','{');
    map.set(']','[');
    let stack = [];
    let arr = [...s];
    let judge = false;
    arr.forEach(ele=>{
        if(['(','{','['].includes(ele)) {
            stack.push(ele)
        } else {
            if(stack.length == 0) {
                judge = true;
                return
            }
            if(stack.pop() != map.get(ele)) {  // 匹配上的话
                judge = true;
                return
            }
        }
    })

    console.log(stack,judge)

    if(stack.length == 0 && !judge) {
        return true
    } else {
        return false
    }


};


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
    if(list1 == null) {
        return list2;
    }
    if(list2 == null) {
        return list1;
    }

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }

};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    return nums.filter(x=>x!=val).length
};
