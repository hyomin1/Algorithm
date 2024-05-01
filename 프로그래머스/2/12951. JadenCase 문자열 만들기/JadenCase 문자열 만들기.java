class Solution {
    public String solution(String s) {
        String answer = "";
        String[] str = s.toLowerCase().split("");
        boolean isFirst = true;
        for(String ss : str) {
            answer += isFirst ? ss.toUpperCase() : ss;
            isFirst = ss.equals(" ") ? true : false;
        }
        return answer;
    }
}