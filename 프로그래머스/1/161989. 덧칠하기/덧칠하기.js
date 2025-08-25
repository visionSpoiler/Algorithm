function solution(n, m, section) {
    let count = 0;
    let start = 0;
    for(let i = 0; i<section.length; i++) {
        if(section[i]>start) {
            count++;
            start = section[i]-1+m;
        }
    }
    return count
}