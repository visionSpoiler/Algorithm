function solution(d, budget) {
    // 정렬
    d.sort((a, b) => a - b)
    // 맨 앞 부터 더해가면서 예산 초과하는지 확인
    let count = 0;
    let sum = 0;
    for (let i in d) {
        sum += d[i]
        if (sum <= budget) {
            count++;
        }
        else {
            break;
        }
    }
    return count
}