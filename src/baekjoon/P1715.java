package baekjoon;
import java.io.*;
import java.util.*;
public class P1715 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        for(int i = 0; i<N;i++) {
            priorityQueue.add(Integer.parseInt(br.readLine()));
        }
        int sum = 0;
        while(priorityQueue.size() != 1) {
            int n1 = priorityQueue.poll();
            int n2 = priorityQueue.poll();
            sum += n1 + n2;
            priorityQueue.add(n1+n2);
        }
        bw.write(sum + "\n");
        bw.flush();
        bw.close();
    }
}
