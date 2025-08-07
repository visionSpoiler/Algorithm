function solution(x) {
    let sum = 0;
    let num = x;
    while(num) {
        sum += num%10;
        num = Math.floor(num/10)
    }
    return x%sum == 0
}