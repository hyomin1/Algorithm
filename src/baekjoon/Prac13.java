package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Prac13 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        int[] B = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i =0; i<N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        st = new StringTokenizer(br.readLine());
        for(int i =0; i<N; i++) {
            B[i] = Integer.parseInt(st.nextToken());
        }

        for (int i =0 ; i <N-1;i++) {
            for(int j =0;j<N-i-1;j++) {
                if(A[j] > A[j+1]) {
                    int tmp = A[j];
                    A[j] = A[j+1];
                    A[j+1] = tmp;
                }
                if (B[j] < B[j+1]) {
                    int tmp = B[j];
                    B[j] = B[j+1];
                    B[j+1] = tmp;
                }
            }
        }
        int sum = 0;
        for (int i =0;i<N;i++) {
            sum += A[i] * B[i];
        }
        System.out.println(sum);
    }
}
