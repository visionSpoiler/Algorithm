function solution(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let h = j + 1; h < nums.length; h++) {
                let sum = nums[i] + nums[j] + nums[h]
                let prime = true;
                for (let z = 2; z < sum; z++) {
                    if (sum % z === 0) {
                        prime = false;
                        break;
                    }
                }
                if (prime) {
                    count++;
                }
            }
        }
    }
    return count;
}