function solution(keymap, targets) {
    let keyboardMap = new Map();

    for (let map of keymap) {
        for (let keyIndex in map) {
            let index = keyboardMap.get(map[keyIndex])
            if (index !== undefined) {
                if (index > Number(keyIndex)) {
                    keyboardMap.set(map[keyIndex], Number(keyIndex))
                }
            }
            else {
                keyboardMap.set(map[keyIndex], Number(keyIndex))
            }
        }
    }

    console.log(keyboardMap)

    let result = []
    for (let target of targets) {
        let sum = 0;
        let canTyping = true;
        for (let char of target) {
            if (keyboardMap.get(char) === undefined) {
                canTyping = false;
                break;
            }
            else {
                sum += (keyboardMap.get(char) + 1)
            }
        }
        if (!canTyping) {
            result.push(-1)
        }
        else {
            result.push(sum)
        }
        sum = 0;
    }

    return result
}
