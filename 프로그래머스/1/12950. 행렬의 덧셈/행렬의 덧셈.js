function solution(arr1, arr2) {
    let arr3 = [];
    for(let i in arr1) {
        arr3.push([])
        for(let j in arr1[i]) {
            arr3[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return arr3
}