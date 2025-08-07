function solution(arr, divisor) {
    var answer = [];
    for(let i of arr) {
        if(i%divisor == 0) {
            answer.push(i)
        }
    }
    if(!answer.length) {
        answer.push(-1)
    }
    return answer.sort((a,b)=> a-b);
}