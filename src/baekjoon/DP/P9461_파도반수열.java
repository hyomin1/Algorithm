package baekjoon.DP;
import java.io.*;
public class P9461_파도반수열 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        long[] D = new long[101];
        int T = Integer.parseInt(br.readLine());
        D[1] = 1;
        D[2] = 1;
        D[3] = 1;
        for(int i = 4; i<=100; i++) {
            D[i] = D[i-3] + D[i-2];
        }
        for(int i = 0; i<T;i++) {
            int n = Integer.parseInt(br.readLine());
            bw.write(D[n] + "\n");
        }
        bw.flush();
        bw.close();
    }
}
