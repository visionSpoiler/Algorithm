function solution(n) {
    const answer = [];
    while(n) {
        answer.push(n%10);
        n = Math.floor(n/10);
    }
    return answer;
}