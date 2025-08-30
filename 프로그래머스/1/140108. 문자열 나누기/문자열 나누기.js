function solution(s) {
    let x = s[0]
    let xNum = 1;
    let noXNum = 0;
    let count = 0;

    for(let i = 1; i<=s.length; i++ ) {
        if(i===s.length && xNum) {
            count++;
            break;
        }
        if(!x) {
            x = s[i]
        }
        if(s[i]===x) {
            xNum++;
        }
        else {
            noXNum++;
        }
        if(xNum === noXNum) {
            count++;
            xNum = 0;
            noXNum = 0;
            x = undefined;
        }
    }
    return count;
}