package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class P10828 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Stack<Integer> stack = new Stack<>();

        for(int i = 0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();
            if(st.hasMoreTokens()) {
                int num = Integer.parseInt(st.nextToken());
                stack.push(num);
            }
            if (cmd.equals("top")) {
                if (stack.isEmpty()) {
                    System.out.println(-1);
                }
                else {
                    System.out.println(stack.peek());
                };
            }
            else if (cmd.equals("size")) {
                System.out.println(stack.size());
            }
            else if (cmd.equals("empty")) {
                if (stack.isEmpty()) {
                    System.out.println(1);
                }
                else {
                    System.out.println(0);
                }
            }
            else if (cmd.equals("pop")) {
                if (stack.isEmpty()) {
                    System.out.println(-1);
                }
                else {
                    System.out.println(stack.pop());
                }
            }
        }
    }
}
