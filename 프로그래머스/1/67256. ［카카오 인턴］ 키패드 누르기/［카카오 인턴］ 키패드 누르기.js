function solution(numbers, hand) {
    let keypadPositionMap = new Map();
    keypadPositionMap.set(0, [2,4])

    let result = ""

    let leftPosition = [1,4]
    let rightPosition = [3,4]

    for(let y = 1; y<=3; y++) {
        for(let x = 1; x<=3; x++) {
            keypadPositionMap.set(x+(y-1)*3, [x,y])
        }
    }

    for(let i = 0; i<numbers.length; i++) {
        let pad = numbers[i];
        if(pad === 1 || pad === 4 || pad === 7) {
            result += "L"
            leftPosition = keypadPositionMap.get(pad)
        }
        else if(pad === 3 || pad === 6 || pad === 9) {
            result += "R"
            rightPosition = keypadPositionMap.get(pad)
        }
        else {
            let padPostion = keypadPositionMap.get(pad)
            let leftDistance = Math.abs(padPostion[0]-leftPosition[0]) +  Math.abs(padPostion[1]-leftPosition[1])
            let rightDistance =  Math.abs(padPostion[0]-rightPosition[0]) +  Math.abs(padPostion[1]-rightPosition[1])
            if(leftDistance>rightDistance) {
                result += "R"
                rightPosition = padPostion
            }
            else if(leftDistance<rightDistance) {
                result += "L"
                leftPosition = padPostion
            }
            else {
                if(hand === "right") {
                    rightPosition = padPostion
                    result += "R"
                }
                else {
                    leftPosition = padPostion
                    result += "L"
                }
            }
        }
    }
    return result
}