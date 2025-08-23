function solution(a, b, n) {
    let count = 0;
    while(n>=a) {
        let bottle = Math.floor(n/a)
        count += bottle*b
        n = bottle*b + n%a
    }
    return count
}
