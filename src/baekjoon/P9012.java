package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class P9012 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        for (int i = 0; i < T; i++) {
            char[] c = br.readLine().toCharArray();
            Stack<Character> stack = new Stack<>();
            boolean answer = isVPS(stack,c);
            if(answer) {
                    System.out.println("YES");
            }
                else {
                    System.out.println("NO");
                }
            }


    }
    static boolean isVPS(Stack stack,char[] c) {
        for (int j = 0; j < c.length; j++) {
            if (c[j] == '(') {
                stack.push(c[j]);
            } else {
                if (!stack.isEmpty()) {
                    stack.pop();
                } else{
                    return false;

                }
            }
        }
        if(!stack.isEmpty()) {
            return false;
        }
        else {
            return true;
        }
    }
}
