class Solution {
    public String solution(String s) {
        String[] str = s.split(" ", -1);
        String answer = "";
        for(int i = 0; i < str.length; i++) {
            String ss = str[i];
            for(int j = 0; j < str[i].length(); j++) {
                char c = str[i].charAt(j);
                if(j % 2 == 0) {
                    answer += Character.toUpperCase(c);
                }
                else {
                    answer += Character.toLowerCase(c);
                }
            }
            if (i != str.length- 1)  {
                answer += " ";
            }
            
        }
        return answer;
    }
}