package baekjoon.DP;
import java.io.*;
import java.util.StringTokenizer;

public class P2225_합분해 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        long[][] D = new long[K+1][N+1];

        for(int i = 1; i <= N; i++) {
            D[1][i] = 1;
        }
        for (int i = 1; i <= K; i++) {
            D[i][0] = 1;
        }
        for(int i = 2; i <= K; i++) {
            for(int j = 1; j <= N; j++) {
                D[i][j] = D[i-1][j] + D[i][j-1];
                D[i][j] %= 1000000000; //여기서 나머지 연산
            }
        }



        bw.write(D[K][N]  + "\n");
        bw.flush();
        bw.close();

    }
}
