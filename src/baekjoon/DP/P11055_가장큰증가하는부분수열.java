package baekjoon.DP;
import java.io.*;
import java.util.*;

public class P11055_가장큰증가하는부분수열 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        int[] D;

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        D = A.clone();

        for(int i = 1; i<N; i++) {
            for(int j = 0; j<i; j++) {
                if(A[i] > A[j] && D[i] < D[j] + A[i]) { // D[i] < D[j] + A[i] 부분이 핵심
                    D[i] = A[i] + D[j];
                }
            }
        }
        int max = 0;
        for (int i : D) {
            max = Math.max(max,i);
        }
        bw.write(max + "\n");
        bw.flush();
        bw.close();

    }
}

