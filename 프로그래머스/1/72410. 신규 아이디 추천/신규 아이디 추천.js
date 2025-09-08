function solution(new_id) {
    // 1 단계
    new_id = new_id.toLowerCase();
    let str = "";

    // 2 단계
    for (let i = 0; i < new_id.length; i++) {
        if ((new_id[i].charCodeAt() >= 97 && new_id[i].charCodeAt() <= 122)
            || (new_id[i].charCodeAt() >= 48 && new_id[i].charCodeAt() <= 57)
            || new_id[i] === "-"
            || new_id[i] === "_"
            || new_id[i] === "."
        ) {
            str += new_id[i]
        }
    }
    new_id = str;
    str = "";


    // 3단계
    let isDot = false;
    for (let i = 0; i < new_id.length; i++) {
        if (new_id[i] === ".") {
            if (isDot) {
                continue;
            }
            str += new_id[i]
            isDot = true;
        }
        else {
            str += new_id[i]
            isDot = false;
        }
    }

    new_id = str;
    str = ""


    // 4 단계
    for (let i = 0; i < new_id.length; i++) {
        if ((i === 0 && new_id[i] === ".") || (i === new_id.length - 1 && new_id[i] === ".")) {
            continue
        }
        str += new_id[i]
    }
    new_id = str;
    str = ""


    // 5단계
    if (new_id === "") {
        new_id = "a"
    }


    // 6단계 
    if (new_id.length >= 16) {
        for (let i = 0; i < 15; i++) {
            if(i === 14 && new_id[i] === ".") {
                continue
            }
            str += new_id[i]
        }
        new_id = str;
        str = ""
    }


    // 7단계
    if (new_id.length <= 2) {
        while (new_id.length !== 3) {
            new_id += new_id[new_id.length - 1]
        }
    }

    return new_id
}