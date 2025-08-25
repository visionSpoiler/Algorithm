function solution(answers) {
    let one = [1, 2, 3, 4, 5]
    let two = [2, 1, 2, 3, 2, 4, 2, 5]
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    let scores = [0, 0, 0]

    for (let i = 0; i < answers.length; i++) {
        if (one[i % 5] === answers[i]) {
            scores[0]++;
        }
        if (two[i % 8] === answers[i]) {
            scores[1]++;
        }
        if (three[i % 10] === answers[i]) {
            scores[2]++;
        }
    }
    let max = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i]
        }
    }
    let answer = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === max) {
            answer.push(i+1)
        }
    }

    return answer
}