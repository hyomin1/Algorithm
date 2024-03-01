package baekjoon.DP;
import java.io.*;

public class P2579_계단오르기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        int[] A = new int[N+1];
        int[] D = new int[N+1];
        for(int i = 1; i<=N; i++) {
            A[i] = Integer.parseInt(br.readLine());
        }
        D[1] = A[1];
        if (N >= 2) {
            D[2] = A[1] + A[2];
        }


        for(int i = 3; i<=N ; i++) {
            D[i] = Math.max(D[i-3] + A[i-1], D[i-2]) + A[i];
        }

        bw.write(D[N] + "\n");
        bw.flush();
        bw.close();




    }
}
