function solution(name, yearning, photo) {
    let answer = [];
    let map = new Map();
    for(let i = 0; i<name.length; i++) {
        map.set(name[i],yearning[i])
    }
    for(let i = 0; i<photo.length; i++) {
        let arr = photo[i];
        let score = 0
        for(let j = 0; j< arr.length; j++) {
            score += map.get(arr[j])||0;
        }
        answer.push(score)
    }
    return answer;
}