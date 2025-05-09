function changeStr(str) {
    str = str.replaceAll('C#','c');
    str = str.replaceAll('D#','d');
    str = str.replaceAll('F#','f');
    str = str.replaceAll('G#','g');
    str = str.replaceAll('A#','a');
    str = str.replaceAll('B#','b');
    return str;
}

function solution(m, musicinfos) {
    var answer = '';
    const arr = [];
    m = changeStr(m);
    let index = 0;
    for (const musicinfo of musicinfos) {
        let [startTime,endTime,name,music] = musicinfo.split(',');
        music = changeStr(music);
        const [startHour,startMinute] = startTime.split(':').map(Number);
        const [endHour,endMinute] = endTime.split(':').map(Number);
        const start = startHour * 60 + startMinute;
        const end = endHour * 60 + endMinute;
        const time = end - start;
        let song = '';
        for (let i = 0; i < time; i++) {
            song += music[i % music.length];
        }
        
        if (song.includes(m)) {
            arr.push([index++,time,name]);
        };
    }
    arr.sort((a,b) => {
       if (a[1] === b[1]) return a[0] - b[0];
        return b[1] - a[1];
    })
   
    answer = arr.length === 0 ? '(None)' : arr[0][2];
    return answer;
}