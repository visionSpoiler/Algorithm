function solution(nums) {
    let set = new Set();
    for(let i = 0; i<nums.length; i++) {
        set.add(nums[i])
    }
    let length = Array.from(set.values()).length 
    return length > nums.length/2 ? nums.length/2 : length
}