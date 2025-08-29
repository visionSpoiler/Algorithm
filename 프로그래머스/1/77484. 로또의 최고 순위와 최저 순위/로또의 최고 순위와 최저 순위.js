function solution(lottos, win_nums) {
    let zeros = 0;
    let set = new Set();
    let rank = 7;

    for(let i = 0; i < lottos.length; i++) {
        set.add(lottos[i])
        if(!lottos[i]) {
            zeros++;
        }
    }

    for(let i = 0; i < win_nums.length; i++) {
        if(set.has(win_nums[i])) {
            rank--;
        }
    }

    return [rank-zeros > 6 ? 6 : rank-zeros, rank > 6 ? 6 : rank]
}