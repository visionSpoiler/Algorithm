function solution(s) {
    let answer = ""
    let t = 0;
    for(let i =0; i<s.length; i++) {
        if(s[i]=== " ") {
            answer += " "
            t = 0;
            continue
        }
        else if(t%2===1) {
            answer += s[i].toLowerCase()
        }
        else {
            answer += s[i].toUpperCase()
        }
        t++;
    }
    return answer;
}