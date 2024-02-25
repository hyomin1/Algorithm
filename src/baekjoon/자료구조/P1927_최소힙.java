package baekjoon.자료구조;
import java.io.*;
import java.util.*;

public class P1927_최소힙 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        PriorityQueue<Integer> queue = new PriorityQueue<>();

        for(int i = 0; i<N;i++) {
            int n = Integer.parseInt(br.readLine());
            if(n == 0) {
                if(queue.isEmpty()) {
                    bw.write(0 + "\n");
                }
                else {
                    bw.write(queue.poll() + "\n");
                }
            }
            else {
                queue.add(n);
            }
        }
        bw.flush();
        bw.close();

    }
}
