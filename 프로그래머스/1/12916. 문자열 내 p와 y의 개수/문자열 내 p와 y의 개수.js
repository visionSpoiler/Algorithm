function solution(s){
    let countOfP = 0;
    let countOfY = 0;

    for(char of s) {
        if(char == 'y' || char == 'Y') {
            countOfY++;
        }
        else if(char == 'p' || char == 'P') {
            countOfP++;
        }
    }

    return countOfP == countOfY
}