import java.util.*;
class Solution {
    
    public String solution(String p) {
        String answer = "";
        if(isRight(p)) return p; // 올바른 괄호
        //올바른 괄호 아닐때 
        answer = transform(p);
        return answer;
    }
    boolean isRight(String s) {
        char[] c = s.toCharArray();
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < c.length; i++) {
            if(c[i] == '(') {
                stack.push(c[i]);
            }
            else if(c[i] == ')') {
                if(!stack.isEmpty() && stack.peek() == '(') {
                    stack.pop();
                }
            }
        }
        return stack.isEmpty();
    }
    String transform(String s) {
        if(s.length() == 0) return "";
        int check = 0;
        int index = 0;
        char[] c = s.toCharArray();
        for(int i = 0; i < c.length; i++) {
            if(c[i] == '(') check++;
            else if(c[i] ==')') check--;
            if(check == 0) {
                index = i+1;
                break;
            }
        }
        String u = s.substring(0,index);
        String v = s.substring(index);
        if(isRight(u)) {
            return u + transform(v);
        }
        else {
            String str = "(";
            str += transform(v);
            str += ")";
            u = u.substring(1,u.length()-1);
            for(char ch : u.toCharArray()) {
                if(ch == ')') str += '(';
                else str += ')';
            }
            return str;
        
        }
    }
}