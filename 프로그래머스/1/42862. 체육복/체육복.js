function solution(n, lost, reserve) {
    let lostMap = new Map()
    let reserveMap = new Map()
    let count = 0;

    for(let i = 0; i<reserve.length; i++) {
        reserveMap.set(reserve[i], true)
    }

    for(let i = 0; i<lost.length; i++) {
        if(reserveMap.get(lost[i])) {
            reserveMap.delete(lost[i])
        }
        else lostMap.set(lost[i], true);
    }



    for(let i = 1; i<=n; i++) {
        if(!lostMap.get(i)) {
            count++;
        }
        else {
            if(reserveMap.get(i-1)) {
                count++;
                reserveMap.delete(i-1)
            }
            else if(reserveMap.get(i+1)) {
                count++;
                reserveMap.delete(i+1)
            }
        }
    }

    return count;
}