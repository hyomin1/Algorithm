package baekjoon.자료구조;

import java.io.*;
import java.util.Stack;
import java.util.StringTokenizer;

public class P2812_크게만들기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        String str = br.readLine();

        Stack<Integer> stack = new Stack<>();
        StringBuilder sb = new StringBuilder();

        for(int i = 0; i<N;i++) {
            int num = str.charAt(i) - '0';
            if(K == 0) {
                stack.push(num);
                continue;
            }
            if(!stack.isEmpty()) {
                while(!stack.isEmpty() && stack.peek() < num) {
                    stack.pop();
                    K--;
                    if(K == 0) {
                        break;
                    }
                }
            }
            stack.push(num);
        }
        while(K > 0 && !stack.isEmpty()) {
            stack.pop();
            K--;
        } // 지워야할 개수 K개가 남아 있다면 제거 해야한다
        while(!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        bw.write(sb.reverse() + "");
        bw.flush();
        bw.close();

    }
}
