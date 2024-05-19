import java.util.*;
class Solution {
    public String[] solution(String[] files) {
        String[] answer = {};
        Arrays.sort(files,(a,b)->{
            String[] str1 = a.split("[0-9]");
            String[] str2 = b.split("[0-9]");
            String s1 = str1[0].toLowerCase();
            String s2 = str2[0].toLowerCase();
            if(s1.equals(s2)) {
                String sNum1 = a.substring(s1.length());
                String sNum2 = b.substring(s2.length());
                int num1 = getNumber(sNum1);
                int num2 = getNumber(sNum2);
                return num1 - num2;
            }
            return s1.compareTo(s2);
        });
        
        answer = files;
        return answer;
    }
    int getNumber(String s) {
        String str = "";
        for(char c : s.toCharArray()) {
            if(Character.isDigit(c) && str.length() <= 5) {
                str += c;
            }
            else {
                break;
            }
        }
        return Integer.parseInt(str);
    }
}