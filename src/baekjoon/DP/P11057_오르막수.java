package baekjoon.DP;
import java.io.*;

public class P11057_오르막수 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int mod = 10007;
        long[][] D = new long[N+1][10];

        for (int i = 0; i<10; i++) {
            D[1][i] = 1;
        }

        for(int i = 2; i<= N; i++) {
            for(int j = 0 ; j<10 ;j++) {
                for(int k = j; k<10; k++) {
                    D[i][j] = (D[i][j] + D[i-1][k]) % mod;
                }
            }
        }
        long sum = 0;
        for(int i = 0; i<10;i++) {
            sum = (sum + D[N][i]) % mod;
        }
        bw.write(sum + "\n");
        bw.flush();
        bw.close();

    }
}
