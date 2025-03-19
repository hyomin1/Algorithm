function parseFile(file) {
    const head = file.match(/^[^0-9]*/)[0];
    const number = file.substring(head.length).match(/\d{1,5}/)[0];
    return {
        file,
        head:head.toLowerCase(),
        number:Number(number),
    }
}

function solution(files) {
    var answer = [];
    files = files.map((file) => parseFile(file));
    files.sort((a,b) => {
        if(a.head === b.head) return a.number - b.number;
        return a.head.localeCompare(b.head);
           })
    answer = files.map((f)=>f.file);
    return answer;
}