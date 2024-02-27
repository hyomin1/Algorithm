package baekjoon.DP;
import java.io.*;

public class P2747_피보나치수 {
    static int[]D;

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        D = new int[N+1];
        D[0] = 0;
        D[1] = 1;

        for(int i = 2; i<=N;i++) {
            D[i] = D[i-2] + D[i-1];
        }
        bw.write(D[N] + "\n");
        bw.flush();
        bw.close();
    }
}
