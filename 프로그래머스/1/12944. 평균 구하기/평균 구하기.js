function solution(arr) {
    let count = arr.length;
    let sum = arr.reduce((pre,cur) => pre+cur, 0)
    return sum/count;
}