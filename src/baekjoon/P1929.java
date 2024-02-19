package baekjoon;
import java.io.*;
import java.util.*;
public class P1929 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[] A = new int[M+1];

        for(int i = 2; i<=M;i++) {
            A[i] = i;
        }
        //M의 제곱근 까지
        for(int i = 2; i<=Math.sqrt(M);i++) {
            if(A[i] == 0) {
                continue;
            }
            for(int j = i + i;j<=M;j=j+i) {
                if(A[j] == 0) {
                    continue;
                }
                A[j] = 0;
            }
        }
        for(int i = N; i <=M; i++) {
            if(A[i] != 0) {
                bw.write(A[i] + "\n");
            }
        }
        bw.flush();
        bw.close();

    }
}
