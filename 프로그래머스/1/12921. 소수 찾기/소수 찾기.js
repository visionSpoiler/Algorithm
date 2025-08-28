function solution(n) {
    let arr = Array(1000001).fill(0);
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) {
            count++;
            for (let j = i; j <= n; j += i) {
                arr[j] = 1;
            }
        }
    }
    return count;
}
