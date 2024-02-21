package baekjoon.자료구조;
import java.io.*;
import java.util.*;
public class P2493_탑 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        Stack<Integer> stack = new Stack<>();
        StringTokenizer st = new StringTokenizer(br.readLine());

        int[] A = new int[N];
        int[] answer = new int[N];
        for(int i = 0; i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        stack.push(N-1);
        for(int i = N-2; i>=0;i--) {

            while(!stack.isEmpty() && A[stack.peek()] <A[i]) {
                answer[stack.pop()] = i+1;
            }
            stack.push(i);
        }
        while(!stack.isEmpty()) {
            answer[stack.pop()] = 0;
        }
        for (int i : answer) {
            bw.write(i + " ");
        }
        bw.flush();
        bw.close();



    }
}
