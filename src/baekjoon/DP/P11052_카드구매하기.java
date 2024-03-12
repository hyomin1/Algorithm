package baekjoon.DP;
import java.io.*;
import java.util.StringTokenizer;

public class P11052_카드구매하기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N+1];
        int[] D = new int[N+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 1 ; i <= N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        D[0] = 0;
        D[1] = A[1];

        for(int i = 2; i <= N; i++) {
            for(int j = 0; j <i; j++) {
                D[i] = Math.max(D[i],D[j] + A[i-j]);
            }
        }
        bw.write(D[N] + "\n");
        bw.flush();
        bw.close();

    }
}
