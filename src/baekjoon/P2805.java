package baekjoon;
import java.io.*;
import java.util.*;
public class P2805 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        long M = Long.parseLong(st.nextToken());
        long[] A = new long[N];
        st = new StringTokenizer(br.readLine());
        long max = 0;
        for(int i = 0; i < N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A);
        long s = 0;
        long e = A[A.length-1];
        long mid = 0;
        long answer = 0;
        while(s<=e) {
            mid = (s + e) / 2;
            long sum = 0;
            for(int i = 0 ; i<N;i++) {
                if(mid < A[i]) {
                    sum += A[i] - mid;
                }
            }

            if(sum >= M) {
                answer = mid;
                s = mid + 1;
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
