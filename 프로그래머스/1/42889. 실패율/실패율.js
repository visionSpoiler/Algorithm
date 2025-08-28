function solution(N, stages) {
    let arr = [];
    for (let i = 1; i <= N; i++) {
        let noClear = 0;
        let clear = 0;
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] >= i) {
                clear++
                if (stages[j] === i) {
                    noClear++
                }
            }
        }
        arr.push([i, clear ? noClear / clear : 0])
    }

    arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]
        }
        return b[1] - a[1]
    })

    return arr.map((val) => val[0])
}
