package baekjoon;
import java.io.*;
import java.util.*;
public class P16564 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        int[] A = new int[N];
        for(int i = 0; i<N; i++) {
            A[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(A);
        long s = A[0];
        long e = A[0] + K; //POINT
        long mid = 0;
        long answer = 0;
        while (s <= e) {
            mid = (s + e) / 2;
            long sum = 0;
            for(int i = 0; i<N;i++) {
                if(mid > A[i]) {
                    sum += mid - A[i];
                }
            }
            if (sum <= K) {
                s = mid + 1;
                answer = mid;
            }
            else {
                e = mid - 1;
            }

        }
        bw.write(answer + "\n");
        bw.flush();
        bw.close();


    }

}
