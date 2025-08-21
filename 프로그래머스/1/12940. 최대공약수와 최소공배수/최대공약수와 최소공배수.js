function solution(n, m) {
    let answer = [n * m];

    if (m > n) {
        [m, n] = [n, m]
    }
    let temp = m;
    while (n % m !== 0) {
        temp = n % m
        n = m;
        m = temp
    }
    answer.unshift(temp)
    answer[1] = answer[1] / temp
    return answer
}