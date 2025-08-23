function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i<arr1.length; i++) {
        let code1 = arr1[i].toString(2).padStart(n,0)
        let code2 = arr2[i].toString(2).padStart(n,0)
        let code3 = "";
        for(let j = 0; j<n; j++) {
            if(code1[j] === "1" || code2[j] === "1") {
                code3 += "#"
            }
            else {
                code3 += " "
            }
        }
        answer.push(code3)
    }
    return answer;
}