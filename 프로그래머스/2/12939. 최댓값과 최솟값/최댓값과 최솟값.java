import java.util.*;
class Solution {
    public String solution(String s) {
        String answer = "";
        String[] str = s.split(" ");
        int[] num = new int[str.length];
        for(int i = 0; i < str.length; i++) {
            num[i] = Integer.parseInt(str[i]);
        }
        Arrays.sort(num);
        answer = num[0] + " " + num[num.length-1];
        return answer;
    }
}