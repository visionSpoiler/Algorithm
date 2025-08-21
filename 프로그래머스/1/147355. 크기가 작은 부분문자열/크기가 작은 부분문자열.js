function solution(t, p) {
    let answer = 0;
    let length = p.length;
    let arr = [];
    let i = 0;
    p = Number(p)
    for(; i<length ; i++) {
        arr.push(t[i]);
    }
    for(; i<=t.length; i++) {
        if(Number(arr.join(""))<=p) {
            answer++;
        }
        arr.shift();
        arr.push(t[i]||0)
    }
    return answer;
}