function solution(babbling) {
    let count = 0;
    let obj = {
        a: "aya",
        y: "ye",
        w: "woo",
        m: "ma",
    }

    for(let i = 0; i<babbling.length; i++) {
        let str = babbling[i];
        let isBabbling = true;
        let temp;
        for(let j = 0; j<str.length;) {
            let bab = obj[str[j]]
            if(bab && temp != bab) {
                temp = bab
                for(let h = 0; h<bab.length; h++) {
                    if(str[j] !== bab[h]) {
                        isBabbling = false;
                        break;
                    }
                    else {
                        j++;
                    }
                }
            }
            else {
                isBabbling = false
                break;
            }
            if(!isBabbling) {
                break;
            }
        }
        if(isBabbling) {
            count++;
        }
    }
    return count
}