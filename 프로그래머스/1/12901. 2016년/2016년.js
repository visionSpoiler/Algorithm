function solution(a, b) {
    let months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = ["THU","FRI","SAT", "SUN","MON","TUE","WED"];
    let sum = 0;
    for(let i = 0; i<a; i++) {
        sum += months[i]
    }
    sum += b;

    return days[sum%7]
}