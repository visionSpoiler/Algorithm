let str = "수박"

function solution(n) {
    let answer = ""
    for(let i =0; i<n; i++) {
        answer += str[i%2]
    }
    return answer
}