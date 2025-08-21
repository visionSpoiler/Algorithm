function solution(number) {
    let answer = 0;
    for(let i =0; i<number.length-2; i++) {
        for(let j = i+1; j<number.length-1; j++) {
            for(let h = j+1; h<number.length; h++) {
                if(!(number[i]+number[j]+number[h])) {
                    answer++
                }
            }
        }
    }
    return answer
}