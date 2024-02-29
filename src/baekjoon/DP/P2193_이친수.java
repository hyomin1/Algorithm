package baekjoon.DP;
import java.io.*;

public class P2193_이친수 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        long[] D = new long[N+1];

        D[1] = 1;
        if(N >= 2) {
            D[2] = 1;
        }

        for(int i = 3; i<=N; i++) {
            D[i] = D[i-1] + D[i-2];
        }
        bw.write(D[N]  + "\n");
        bw.flush();
        bw.close();
    }

}
