function solution(s, skip, index) {
    let arr = [];
    for(let i = 0; i<s.length; i++) {
        arr.push(s[i].charCodeAt()-97);
    }
    
    let set = new Set();
    for(let i = 0; i<skip.length; i++) {
        set.add(skip[i].charCodeAt()-97)
    }

    for(let i = 0; i<arr.length; i++) { 
        for(let j = 0; j<index;) {
            arr[i] = (arr[i]+1)%26
            if(set.has(arr[i])) {
                continue
            }
            else {
                j++
            }
        }
    }

    arr = arr.map((val) => String.fromCharCode(val+97))
    return arr.join("")
}
