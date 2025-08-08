function solution(arr) {
    if(arr.length == 1) {
        return [-1]
    }
    let min = Number.MAX_SAFE_INTEGER
    for(let i of arr) {
        if(i < min) {
            min = i;
        }
    }
    return arr.filter((val) => val != min)
}