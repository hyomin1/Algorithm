package baekjoon.DP;
import java.io.*;
public class P11727_2xn타일링2 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        long[] D = new long[1001];
        D[1] = 1;
        D[2] = 3;

        int n = Integer.parseInt(br.readLine());

        for(int i = 3; i<=n;i++) {
            D[i] = (2*D[i-2] + D[i-1]) % 10007;
        }
        bw.write(D[n] + "\n");
        bw.flush();
        bw.close();


    }
}
