package baekjoon;

import java.io.*;
import java.util.Stack;
import java.util.StringTokenizer;

public class P1406 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String str = br.readLine();
        int N = Integer.parseInt(br.readLine());
        Stack<Character> stack1 = new Stack<>();
        Stack<Character> stack2 = new Stack<>();
        for(int i = 0;i<str.length();i++) {;
            stack1.push(str.charAt(i));
        }
        for(int i = 0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();
            if(cmd.equals("P")) {
                char c = st.nextToken().charAt(0);
                stack1.push(c);
            }
            else if(cmd.equals("L")) {
                if(!stack1.isEmpty()) {
                    stack2.push(stack1.pop());
                }
            }
            else if(cmd.equals("B")) {
                if(!stack1.isEmpty()) {
                    stack1.pop();
                }
            }
            else if(cmd.equals("D")) {
                if(!stack2.isEmpty()) {
                    stack1.push(stack2.pop());
                }
            }



        }
        while(!stack1.isEmpty()) {
            stack2.push(stack1.pop());
        }
        while(!stack2.isEmpty()) {
            bw.write(stack2.pop()); //System.out.print -> 시간 초과
        }
        bw.flush();
    }
}
