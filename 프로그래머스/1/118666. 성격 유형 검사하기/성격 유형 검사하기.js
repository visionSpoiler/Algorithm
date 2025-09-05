// 두번째를 받는다.

function solution(survey, choices) {
    let R = 0;  // T
    let C = 0; // F
    let J = 0; // M
    let A = 0; // N

    let str = "";

    for(let i = 0; i<survey.length; i++) {
        let score = choices[i] - 4;
        if(survey[i][1] === "R" || survey[i][1] === "T") {
            if(survey[i][1] === "T") {
                score *= -1;
            }
            R += score
        }
        if(survey[i][1] === "C" || survey[i][1] === "F") {
            if(survey[i][1] === "F") {
                score *= -1;
            }
            C += score
        }
        if(survey[i][1] === "J" || survey[i][1] === "M") {
            if(survey[i][1] === "M") {
                score *= -1;
            }
            J += score
        }
        if(survey[i][1] === "A" || survey[i][1] === "N") {
            if(survey[i][1] === "N") {
                score *= -1;
            }
            A += score
        }
    }
    str += (R>=0 ? "R" : "T")
    str += (C>=0 ? "C" : "F")
    str += (J>=0 ? "J" : "M")
    str += (A>=0 ? "A" : "N")

    return str;
}
