function solution(price, money, count) {
    let sum = 0;
    for(let i = 1; i<=count; i++) {
        sum += i;
    }
    return (money - sum*price ) < 0 ? (money - sum*price )*-1 : 0
}