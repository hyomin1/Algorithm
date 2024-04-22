class Solution {
    public String solution(String new_id) {
        String answer = "";
        //1단계. 대문자 -> 소문자
        answer = new_id.toLowerCase();
        //2단계. 소문자, 숫자, 빼기, 밑줄, 마침표 제외 모든 문자 제거
        answer = answer.replaceAll("[^a-z0-9-_.]","");
        //3단계. 마침표가 2번 이상 연속된 부분을 하나로 치환
        answer = answer.replaceAll("\\.+",".");
        //4단계. 마침표가 처음이나 끝에 위치한다면 제거
        if(answer.charAt(0) == '.') {
            answer = answer.substring(1);
        } 
        if(answer.length() >= 1 && answer.charAt(answer.length() - 1) == '.') {
            answer = answer.substring(0,answer.length()-1);
        }
        //5단계 빈 문자열이라면 a 대입
        if(answer.length() == 0) {
            answer += "a";
        }
        //6단계, 아이디 길이 16자 이상이면 첫 15개 제외한 문자 제거
        if (answer.length() >= 16) {
            answer = answer.substring(0,15);
        }
        //6단계, 문자 제거후 마지막 문자 마침표라면 제거
         if(answer.length() >= 1 && answer.charAt(answer.length() - 1) == '.') {
            answer = answer.substring(0,answer.length()-1);
        }
        //7단계,
        if(answer.length() <= 2) {
            int len = answer.length();
            for(int i = len; i < 3; i++) {
                answer += answer.charAt(answer.length()-1);
            }
        }
        
        return answer;
    }
}