package baekjoon.DP;
import java.io.*;

public class P10844_쉬운계단수 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        long[][] D = new long[N+1][10];
        long mod = 1000000000;

        for(int i = 1; i<=9; i++) {
            D[1][i] = 1; // 길이 1인 계단은 경우의 수 각각 1
        }

        for(int i = 2; i<=N; i++) {
            D[i][0] = D[i-1][1]; // 현재 계단 수 0이면 이전에는 1만 가능
            D[i][9] = D[i-1][8]; // 현재 계단 수 9면 이전에는 8만 가능

            for(int j = 1; j<=8; j++) {
                D[i][j] = ( D[i-1][j-1] + D[i-1][j+1] ) % mod;
            }
        }
        long sum = 0;
        for(int i =0; i< 10 ; i++) {
            sum = (sum + D[N][i]) % mod;
        }
        bw.write(sum + "\n");
        bw.flush();
        bw.close();
    }
}
