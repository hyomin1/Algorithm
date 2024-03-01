package baekjoon.DP;
import java.io.*;
import java.util.StringTokenizer;

public class P1912_연속합 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        int[] A = new int[n];
        int[] D = new int[n];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i<n;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }

        D[0] = A[0];
        int max = A[0];
        for(int i = 1; i<n;i++) {
            D[i] = Math.max(D[i-1] + A[i], A[i]);
            max = Math.max(max,D[i]);
        }


        bw.write(max + "\n");
        bw.flush();
        bw.close();
    }
}
