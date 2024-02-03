package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P2609 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int num = N > M ? M : N;
        int max = 0;
        for(int i =1;i<=num;i++) {
            if(N%i==0&&M%i==0) {
                max = i;
            }
        }
        System.out.println(max);
        int min = max * (N/max) * (M/max);
        System.out.println(min);
    }
}
