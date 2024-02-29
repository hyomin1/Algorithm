package baekjoon.DP;
import java.io.*;
import java.util.*;
public class P11722_가장긴감소하는부분수열 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        int[] D = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
            D[i] = 1;
        }

        for(int i = N - 2; i >=0; i--) {
            for(int j = N-1; j>i; j--) {
                if(A[i] > A[j] && D[i] <= D[j]) {
                    D[i] = D[j] + 1;
                }
            }
        }
        int max = 0;
        for (int i : D) {
            max = Math.max(max,i);

        }
        bw.write(max + "\n");
        bw.flush();
        bw.close();
    }
}
