function solution(n) {
    let arr = [];
    while(n) {
        arr.push(n%3)
        n = Math.floor(n/3)
    }
    let deximal = 0;
    arr.reverse();
    let e = 1
    for(let i of arr) {
        deximal += i*e
        e *=3;
    }
    return deximal
}