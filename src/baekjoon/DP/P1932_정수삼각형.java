package baekjoon.DP;
import java.io.*;
import java.util.StringTokenizer;

public class P1932_정수삼각형 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        int[][] A = new int[n][n];
        int[][] D = new int[n][n];

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                A[i][j] = -1;
            }
        }
        for(int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j = 0; j < i + 1; j++) {
                A[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        D[0][0] = A[0][0];

        for(int i = 1; i < n; i++) {
            for(int j = 0; j <= i; j++) {
                if(j == 0) {
                    D[i][j] = A[i][j] + D[i-1][j];
                }
                else if(j == i) {
                    D[i][j] = A[i][j] + D[i-1][j-1];
                }
                else {
                    D[i][j] = A[i][j] + Math.max(D[i-1][j-1],D[i-1][j]);
                }
            }
        }
        int max = D[n-1][0];
        for(int i = 1; i < n; i++) {
            max = Math.max(max,D[n-1][i]);
        }
        bw.write(max + "\n");


        bw.flush();
        bw.close();



    }
}
