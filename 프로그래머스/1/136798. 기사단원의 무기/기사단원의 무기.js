// 시간초과가 나는걸 알고 있다면 이제 어떻게 해야 한다는 것인가?
// 지금 당장 생각나는건 루트시키고 왼쪽 오른쪽 하나씩 나오니 그걸로 하는거
function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i<=number; i++) {
        let sqr = Math.sqrt(i);
        let count = 0;
        if(Math.floor(sqr)**2 === i) {
            count++
        }
        for(let j = 1; j < sqr ; j++) {
            if(i%j===0) {
                count += 2
            }
        }
        if(count > limit) {
            count = power;
        }
        answer += count;
    }
    return answer;
}