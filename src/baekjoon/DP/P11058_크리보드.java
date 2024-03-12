package baekjoon.DP;
import java.io.*;
public class P11058_크리보드 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        long[] D = new long[N+1];

        for(int i = 1; i <= N; i++) {
            D[i] = D[i-1] + 1;
            if (i >= 7) {
                for(int j = 2; j <= 4; j++ ) {
                    D[i] = Math.max(D[i],D[i-(j+1)] * j);
                }
            }
        }
        bw.write(D[N] + "\n");
        bw.flush();
        bw.close();

    }
}
