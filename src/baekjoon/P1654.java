package baekjoon;
import java.io.*;
import java.util.*;
public class P1654 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int K = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());
        int[] A = new int[K];
        for(int i = 0; i< K;i++) {
            A[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(A);
        long s = 1; //0부터가 아닌 1부터 잡아야함
        long e = A[K-1];

        long mid = 0;
        long res = 0;
        while(s<=e) {
            mid = (s + e) / 2;
            int sum = 0;
            for(int i = 0; i<K;i++) {
                sum += A[i] / mid;
            }
            if (sum < N) {
                e = mid - 1;

            }
            else {
                s= mid + 1;
                res = mid;

            }
        }
        bw.write(res + "\n");
        bw.flush();
        bw.close();


    }
}
