package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class P17413 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        StringBuffer sb = new StringBuffer();
        Stack<Character> stack = new Stack<>();
        boolean check = false;
        for(int i =0;i<str.length();i++) {
            if(str.charAt(i) == '<') {
                while(!stack.isEmpty()) {
                    sb.append(stack.pop());
                }
                sb.append(str.charAt(i));
                check = true;
            }
            else if(str.charAt(i) == '>') {
                sb.append(str.charAt(i));
                check=false;
            }
            else if(check) {
                sb.append(str.charAt(i));
            }
            else {
                if(str.charAt(i) ==' ') {
                    while(!stack.isEmpty()) {
                        sb.append(stack.pop());
                    }
                    sb.append(str.charAt(i));
                }
                else {
                    stack.push(str.charAt(i));

                }

            }


        }
        while(!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        System.out.println(sb);

    }
}
