package baekjoon.DP;
import java.io.*;
import java.util.StringTokenizer;

public class P12865_평범한배낭 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        int[][] arr = new int[N+1][2];
        int[][] D = new int[N+1][K+1];

        for(int i = 1; i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            int W = Integer.parseInt(st.nextToken()); //무게
            int V = Integer.parseInt(st.nextToken()); //가치
            arr[i][0] = W;
            arr[i][1] = V;
        }

        for(int i = 1; i <= N; i++) {
            for(int j = 1; j <= K; j++) {
                D[i][j] = D[i-1][j];
                if(j - arr[i][0] >= 0) {
                    D[i][j] = Math.max(D[i][j],D[i-1][j-arr[i][0]] + arr[i][1]);
                }

            }
        }

        bw.write(D[N][K] + "\n");
        bw.flush();
        bw.close();

    }
}
