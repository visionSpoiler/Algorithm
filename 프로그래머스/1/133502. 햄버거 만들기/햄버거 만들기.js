// 1 빵 2 야채 3 고기
// 1 2 3 1
function solution(ingredient) {
    let arr = [];
    let count = 0;
    for(let i = 0; i<ingredient.length; i++) {
        if(ingredient[i]===1 && arr[arr.length-1] === 3 && arr[arr.length-2] === 2 && arr[arr.length-3] === 1) {
            count++;
            arr.pop()
            arr.pop()
            arr.pop()
        }
        else {
            arr.push(ingredient[i])
        }
    }

    return count;
}