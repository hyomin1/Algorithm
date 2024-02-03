package baekjoon;

import java.io.*;
import java.util.Stack;
import java.util.StringTokenizer;

public class P17298 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        int[] answer = new int[N];
        Stack<Integer> stack = new Stack<>();
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i =0;i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        stack.push(0); //스택 초기화

        for(int i = 1; i<N;i++) {
            while(!stack.isEmpty() && A[stack.peek()] < A[i]) {
                answer[stack.pop()] = A[i];
            }
            stack.push(i);
        }
        while(!stack.isEmpty()) {
            answer[stack.pop()] = -1;
        }
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        for (int i : answer) {
            bw.write(i + " ");
        }
        bw.flush();

    }
}
