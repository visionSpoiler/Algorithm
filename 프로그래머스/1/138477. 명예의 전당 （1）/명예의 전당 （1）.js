function solution(k, score) {
    let answer = [];
    let arr = Array(2001).fill(0);
    for (let i = 0; i < score.length; i++) {
        arr[score[i]]++
        if (i < k) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j]) {
                    answer.push(j)
                    break;
                }
            }
        }
        else {
            let count = 0;
            for (let j = arr.length - 1; j >= 0; j--) {
                if(arr[j]) count += arr[j];
                if(count >= k) {
                    answer.push(j)
                    break;
                }
            }
        }
    }

    return answer;
}