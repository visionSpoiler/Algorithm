function solution(array, commands) {
    var answer = [];
    for(let i = 0; i<commands.length; i++) {
        let command = commands[i]
        let arr = [];
        for(let i = command[0]-1; i<command[1]; i++ ) {
            arr.push(array[i])
        }
        arr.sort((a,b) => a-b)
        answer.push(arr[command[2]-1])
    }
    return answer;
}