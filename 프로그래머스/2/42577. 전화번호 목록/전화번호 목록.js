function solution(phone_book) {
    var answer = true;
    const map = {};
    for (let i = 0; i < phone_book.length; i++) {
        let str = '';
        for (let j = 0; j < phone_book[i].length - 1; j++) {
            str += phone_book[i][j];
            map[str] = phone_book[i];
        }
    }
    for (let i = 0; i < phone_book.length; i++) {
        if (map[phone_book[i]]) {
            answer = false;
            break;
        }
    }
    return answer;
}