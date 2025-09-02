function solution(X, Y) {
    let map = new Map();
    let arr = Array(10).fill(0)

    for(let i = 0; i<X.length; i++) {
        let num = map.get(Number(X[i]))
        if(num===undefined) {
            map.set(Number(X[i]), 1)
        }
        else {
            map.set(Number(X[i]), num+1)
        }
    }

    for(let i = 0; i<Y.length; i++) {
        let num = map.get(Number(Y[i]))
        if(num && num > 0) {
            map.set(Number(Y[i]), num-1)
            arr[Number(Y[i])]++
        }
    }

    let str = ""
    
    for(let i = arr.length-1; i>=0; i--) {
        if(arr[i]) {
            for(let j = 0; j<arr[i]; j++) {
                str = str + i
            }
        }
    }

    if(str === "") {
        return "-1"
    }

    if(str[0] === "0") {
        return "0"
    }

    return str;
}

console.log(solution("5525", "1255"))