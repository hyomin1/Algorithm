import java.util.*;
class Solution {
    public int solution(String s) {
        int answer = 0;
        
        for(int i = 0; i < s.length(); i++) {
            Stack<Character> stack = new Stack<>();
            int rc = 0;
            for(int j = 0; j < s.length(); j++) {
                char c = s.charAt(j);
                if(c == '[' || c == '{' || c=='(') {
                    stack.push(c);
                }
                else {
                    rc++;
                }
                if(!stack.isEmpty() && c == ']' && stack.peek() =='[') {
                    stack.pop();
                    rc--;
                }
                if(!stack.isEmpty() && c == '}' && stack.peek() == '{') {
                    stack.pop();
                    rc--;
                }
                if(!stack.isEmpty() && c ==')' && stack.peek() == '(') {
                    stack.pop();
                    rc--;
                }
            }
            if(stack.isEmpty() && rc == 0) answer++;
            
            s = s.substring(1) + s.substring(0,1);
        }
        return answer;
    }
}