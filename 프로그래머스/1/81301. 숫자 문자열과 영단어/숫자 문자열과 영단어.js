function solution(s) {
    let obj = {
        "zero" : 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    let answer = ""
    let str = ""
    for(let i =0; i<s.length; i++){
        if(isNaN(Number(s[i]))) {
            str+= s[i]
        }
        else {
            answer += s[i]
        }
        if(obj[str] !== undefined) {
            answer += obj[str]
            str = ""
        }
    }
    return Number(answer)
}