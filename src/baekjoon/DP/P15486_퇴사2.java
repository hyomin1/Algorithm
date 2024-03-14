package baekjoon.DP;
import java.io.*;
import java.util.StringTokenizer;

public class P15486_퇴사2 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        int[][] arr = new int[N+2][2];
        int[] D = new int[N+2];

        for(int i = 1; i <= N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int T = Integer.parseInt(st.nextToken()); //기간
            int P = Integer.parseInt(st.nextToken()); //금액
            arr[i][0] = T;
            arr[i][1] = P;

        }
        int max = -1;
        for(int i = 1; i <=N+1; i++) {
            if (max < D[i]) {
                max = D[i];
            }
            int nextDay = i + arr[i][0];
            if (nextDay > N + 1) {
                continue;
            }
            D[nextDay] = Math.max(D[nextDay], max + arr[i][1]);
        }


        bw.write(D[N+1] + "\n");
        bw.flush();
        bw.close();
    }
}
