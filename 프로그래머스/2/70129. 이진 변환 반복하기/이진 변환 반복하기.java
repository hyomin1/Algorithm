class Solution {
    public int[] solution(String s) {
        
        int cnt = 0;
        int delZero = 0;
        int c = 0;
        
        while(!s.equals("1")) {
            String str = "";
            for(int i = 0; i < s.length(); i++) {
                if(s.charAt(i) == '0') {
                    delZero++;
                }
                if(s.charAt(i) == '1') {
                    str += s.charAt(i);
                }
            }
        c = str.length();
        String bin = Integer.toBinaryString(c);
        s = bin;
        cnt++;
        }
        int[] answer = {cnt, delZero};
        return answer;
    }
}