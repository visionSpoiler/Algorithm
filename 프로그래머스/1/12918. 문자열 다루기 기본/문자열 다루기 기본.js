function solution(s) {
    if(s.length === 4 || s.length === 6) {
        for(let i =0; i<s.length; i++) {
            if(isNaN(Number(s[i]))) {
                break;
            }
            if(i == s.length - 1) {
                return true
            }
        }
    }
    return false
}