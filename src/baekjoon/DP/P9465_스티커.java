package baekjoon.DP;
import java.io.*;
import java.util.*;

public class P9465_스티커 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());

        for(int k = 0; k < T; k++) {
            int n = Integer.parseInt(br.readLine());
            int[][] A = new int[2][n+1];
            int[][] D = new int[2][n+1];
            for(int i = 0; i < 2; i++) {
                StringTokenizer st = new StringTokenizer(br.readLine());
                for(int j = 1; j <= n; j++) {
                    A[i][j] = Integer.parseInt(st.nextToken());
                }
            }
            D[0][1] = A[0][1];
            D[1][1] = A[1][1];

            for(int i = 2; i <= n; i++) {
                D[0][i] = Math.max(D[1][i-2], D[1][i-1]) + A[0][i];
                D[1][i] = Math.max(D[0][i-2], D[0][i-1]) + A[1][i];
            }
            int max = Math.max(D[0][n],D[1][n]);

            bw.write(max+"\n");
            bw.flush();


        }
        bw.close();





    }
}
