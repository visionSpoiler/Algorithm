function solution(numbers) {
    let sum = 1+2+3+4+5+6+7+8+9;
    for(let i of numbers) {
        sum -= i;
    }
    return sum;
}