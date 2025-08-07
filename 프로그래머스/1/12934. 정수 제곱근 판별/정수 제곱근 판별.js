function solution(n) {
    let sqrt = Math.sqrt(n)
    if(sqrt !== Math.floor(sqrt)) {
        return -1
    } 
    return (sqrt+1)**2
}