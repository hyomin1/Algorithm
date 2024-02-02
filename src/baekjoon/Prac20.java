package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.PriorityQueue;

public class Prac20 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());

        for (int i =0;i<T;i++) {
            int num = Integer.parseInt(br.readLine());
            if(num ==0 ){
                if(queue.isEmpty()) {
                    System.out.println(0);
                }
                else {
                    System.out.println(queue.poll());
                }
            }
            queue.add(num);
        }

    }

}
