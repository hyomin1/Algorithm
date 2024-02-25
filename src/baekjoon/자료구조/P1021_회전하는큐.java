package baekjoon.자료구조;

import java.io.*;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class P1021_회전하는큐 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        LinkedList<Integer> deque = new LinkedList<>();
        for(int i = 1 ; i<=N;i++) {
            deque.add(i);
        }
        int answer = 0;
        st = new StringTokenizer(br.readLine());
        for(int i = 0 ; i<M; i++) {
            int n = Integer.parseInt(st.nextToken());
            int idx = deque.indexOf(n); //찾고자 하는 원소
            int half = deque.size()/ 2; // 중앙 값
            if (idx > half) { //right
                while (deque.peekFirst() != n) {
                    deque.addFirst(deque.pollLast());
                    answer++;
                }
            } else { //left
                while (deque.peekFirst() != n) {
                    deque.addLast(deque.pollFirst());
                    answer++;
                }
            }
            deque.pollFirst(); // 첫번째 값 뽑기
        }
        bw.write(answer + " ");
        bw.flush();
        bw.close();
    }
}
