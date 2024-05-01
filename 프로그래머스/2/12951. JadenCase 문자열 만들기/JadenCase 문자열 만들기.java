class Solution {
    public String solution(String s) {
        String answer = "";
        String[] str = s.split(" ");
        for(int i = 0; i < str.length; i++) {
            String ss = str[i];
            //공백 문자일시
            if(str[i].length() == 0) {
                answer += " ";
            }
            else {
                answer += ss.substring(0,1).toUpperCase();
                answer += ss.substring(1).toLowerCase();
                answer+=" ";
            }
        }
        if(s.substring(s.length()-1, s.length()).equals(" ")){
    		return answer;
    	}
        
        
        
        return answer.substring(0,answer.length()-1);
    }
}