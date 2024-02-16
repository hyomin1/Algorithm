package baekjoon;
import java.io.*;
import java.util.StringTokenizer;

public class P11047 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        int[] A = new int[N];
        for(int i = 0; i<N;i++) {
            A[i] = Integer.parseInt(br.readLine());
        }
        int sum = 0;
        for(int i = N-1; i>=0;i--) {
            if (A[i] <= K) {
                sum += K / A[i];
                K = K % A[i];
            }
        }
        bw.write(sum + "\n");
        bw.flush();
        bw.close();

    }
}
