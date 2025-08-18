function solution(a, b) {
    let sum = 0;
    for(let i in a) {
        sum += a[i]*b[i]
    }
    return sum
}