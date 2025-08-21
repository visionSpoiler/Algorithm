function solution(arr)
{
    let answer = [];
    for(let i of arr) {
        while(answer[answer.length-1] === i) {
            answer.pop();
        }
        answer.push(i)
    }
    return answer
}
