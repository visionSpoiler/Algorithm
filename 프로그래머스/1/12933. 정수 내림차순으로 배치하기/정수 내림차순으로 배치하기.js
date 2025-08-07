function solution(n) {
    let array = [];
    while(n) {
        array.push(n%10)
        n = Math.floor(n/10);
    }
    let sum = 0;
    array.sort((a,b) => b-a)
    for(let i of array) {
        sum *= 10;
        sum += i;
    }
    return sum;
}