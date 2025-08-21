function solution(food) {
    let answer = ""
    for(let i =1; i<food.length; i++) {
        let count = Math.floor(food[i]/2);
        for(let j = 0; j<count; j++) {
            answer += String(i)
        }
    }
    let reversed = ""
    for(let i = answer.length-1; i>=0; i--) {
        reversed += String(answer[i])
    }
    return answer + "0" + reversed
}