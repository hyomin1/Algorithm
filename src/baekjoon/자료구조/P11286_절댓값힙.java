package baekjoon.자료구조;
import java.io.*;
import java.util.*;
public class P11286_절댓값힙 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> {
            int abs_1 = Math.abs(a);
            int abs_2 = Math.abs(b);
            if(abs_1 == abs_2) { //절댓값 같을 경우 작은 수 먼저
                return a - b;
            }
            else {
                return abs_1 - abs_2;
            }
        });

        for(int i =0;i<N;i++) {
            int n = Integer.parseInt(br.readLine());
            if(n==0) {
                if(pq.isEmpty()) {
                    bw.write(0 + "\n");
                }
                else {
                    bw.write(pq.poll() + "\n");
                }
            }
            else {
                pq.add(n);
            }
        }
        bw.flush();
        bw.close();

    }
}
