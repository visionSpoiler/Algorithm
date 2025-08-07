function solution(absolutes, signs) {
    let sum = 0;
    for (let i in absolutes) {
        sum += absolutes[i] * (signs[i] ? 1 : -1)
    }
    return sum;
}