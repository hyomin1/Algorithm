package baekjoon.DP;
import java.io.*;
public class P9095_123더하기 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());
        long[] D = new long[11];
        D[1] = 1;
        D[2] = 2;
        D[3] = 4;

        for(int i = 4; i<=10;i++) {
            D[i] = D[i-1] + D[i-2] + D[i-3];
        }

        for(int i = 0; i<T;i++) {
            int n = Integer.parseInt(br.readLine());
            bw.write(D[n] + "\n");
        }
        bw.flush();
        bw.close();

    }
}
