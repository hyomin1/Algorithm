function solution(babbling) {
    let answer = 0;
    let speak = ["aya","ye","woo","ma"];
    
    // babbling[i] 를 bab으로 정의
    for(let i = 0; i < babbling.length; i++){
        let bab = babbling[i];
        
        // 두번 연속 발음할 경우 반복문에서 탈출
        for(let j = 0; j < speak.length; j++){
            if(bab.includes(speak[j].repeat(2))){
                break;
            }
            
            // split을 이용해, 말할수 있는 단어를 제거
            bab = bab.split(speak[j]).join(" ");  
        } 
    
            // bab의 문자 갯수가 0 이라면 발음 가능한 단어이므로 answer에 1을 더해준다
            if(bab.split(" ").join("").length === 0){
                answer++;
            }
    }
    return answer;
}