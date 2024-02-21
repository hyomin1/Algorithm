package baekjoon.자료구조;
import java.io.*;
import java.util.*;
public class P17298_오큰수 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        int[] answer = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        Stack<Integer> stack = new Stack<>();
        stack.push(0);

        for(int i = 1; i<N; i++) {
            while(!stack.isEmpty() && A[stack.peek()] <A[i]) {
                answer[stack.pop()] = A[i];
            }
            stack.push(i);
        }
        while(!stack.isEmpty()) {
            answer[stack.pop()] = -1;
        }

        for (int i : answer) {
            bw.write(i + " ");
        }
        bw.flush();
        bw.close();

    }
}
