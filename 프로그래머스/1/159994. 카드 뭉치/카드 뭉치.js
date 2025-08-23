function solution(cards1, cards2, goal) {
    let cardOnePointer = 0;
    let cardTwoPointer = 0;

    for(let i = 0; i<goal.length; i++) {
        if(cards1[cardOnePointer] === goal[i]) {
            cardOnePointer++;
        }
        else if(cards2[cardTwoPointer] === goal[i]) {
            cardTwoPointer++;
        }
        else {
            return "No"
        }
    }
    return "Yes"
}