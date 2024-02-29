package baekjoon.DP;
import java.io.*;
import java.util.*;

public class P11053_가장긴증가하는부분수열 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        int[] A = new int[N];
        int[] D = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
            D[i] = 1; //부분 수열의 길이는 모두 최소 1
        }

        for(int i = 1; i<N; i++) {
            for(int j = 0; j <i; j++) {
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
