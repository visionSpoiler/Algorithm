function solution(phone_number) {
    var answer = '';
    for(let i = 0; i<phone_number.length-4; i++) {
        answer = answer+"*"
    }
    for(let i = phone_number.length-4; i<phone_number.length; i++) {
        answer = answer+phone_number[i]
    }
    return answer;
}