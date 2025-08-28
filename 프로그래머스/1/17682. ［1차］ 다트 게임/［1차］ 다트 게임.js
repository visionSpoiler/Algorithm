function solution(dartResult) {
    let arr = [];

    let signs = ["S", "D", "T", "*", "#"]

    let num = ""

    for (let i = 0; i < dartResult.length; i++) {
        if (signs.includes(dartResult[i])) {
            if (dartResult[i] === "S") {
                arr.push(Number(num))
                num = ""
            }
            else if (dartResult[i] === "D") {
                arr.push(Number(num) ** 2)
                num = ""
            }
            else if (dartResult[i] === "T") {
                arr.push((Number(num)) ** 3)
                num = ""
            }
            else if (dartResult[i] === "*") {
                arr[arr.length - 1] = arr[arr.length - 1] * 2
                if (arr.length - 2 >= 0) {
                    arr[arr.length - 2] = arr[arr.length - 2] * 2
                }
            }
            else {
                arr[arr.length - 1] = arr[arr.length - 1] * -1
            }
        }
        else {
            num += dartResult[i];
        }
    }
    return arr[0] + arr[1] + arr[2]
}