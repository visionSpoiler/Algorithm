function solution(schedules, timelogs, startday) {

    let answer = schedules.length;

    for (let i = 0; i < schedules.length; i++) {
        if (schedules[i] % 100 + 10 >= 60) {
            schedules[i] = schedules[i] + 50;
        }
        else {
            schedules[i] = schedules[i] + 10;
        }
    }
    for (let i = 0; i < timelogs.length; i++) {
        let day = startday
        for (let j = 0; j < 7; j++, day++) {
            if (day > 7) {
                day -= 7
            }
            if (day === 6 || day === 7) {
                continue;
            }
            if (timelogs[i][j] > schedules[i]) {
                answer--;
                break;
            }
        }
    }
    return answer;
}