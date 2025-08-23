function solution(n, w, num) {
    let arr = Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Array(10).fill(0);
    }
    for (let i = 1; i <= n; i++) {
        let height = Math.floor((i - 1) / w)
        let width = height % 2 === 0 ? (i - 1) % w : w - (i - 1) % w - 1
        arr[height][width] = i;
    }


    let count = 0;
    let height = undefined;
    let width = undefined;
    for(let i =0; i<100; i++) {
        for(let j = 0; j<10; j++) {
            if(arr[i][j] === num) {
                height = i;
                width = j;
                break;
            }
        }
    }

    while(arr[height][width]) {
        count++;
        height++
    }

    return count;
}