function solution(sizes) {
    let heights = [];
    let widths = [];
    for(let i of sizes) {
        let [max,min] = i
        let [a,b] = max<min ? [min,max] : [max,min];
        [max, min] = [a,b]
        heights.push(max);
        widths.push(min);
    }
    heights.sort((a,b) => a-b)
    widths.sort((a,b) => a-b)
    return heights[heights.length-1] * widths[widths.length-1]
}