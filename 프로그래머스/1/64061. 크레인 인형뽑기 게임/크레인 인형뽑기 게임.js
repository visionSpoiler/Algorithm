function solution(board, moves) {
    let arr = [];
    let height = board.length;
    let width = board[0].length;

    for(let w = 0; w < width; w++) {
        let tempArr= [];
        for(let h = height-1; h >= 0; h--) {
            if(board[h][w] > 0) {
                tempArr.push(board[h][w] )
            }
        }
        arr.push(tempArr);
    }

    let result = 0;
    let stack = [];

    for(let i = 0; i<moves.length; i++) {
        let currentArr = arr[moves[i]-1];
        let doll = undefined;
        if(currentArr.length) {
            doll = currentArr.pop();
        }
        if(doll) {
            if(stack[stack.length-1] === doll) {
                stack.pop();
                result += 2;
            }
            else {
                stack.push(doll)
            }
        }
    }
    return result;
    
}
