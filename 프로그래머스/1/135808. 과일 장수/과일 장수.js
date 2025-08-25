function solution(k, m, score) {
    score.sort((a,b) => a-b)
    let lastIndex = score.length-m;
    let sum = 0;
    for(let i = lastIndex; i>=0; i -= m) {
        sum += score[i]*m
    }
    return sum;
}