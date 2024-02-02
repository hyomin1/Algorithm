package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class P1253 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        long[] A = new long[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i =0; i<N; i++) {
            A[i] = Long.parseLong(st.nextToken());
        }
        Arrays.sort(A);
        long count = 0;
        for (int i = 0; i<N;i++) {
            long target = A[i];
            int start = 0;
            int end = N - 1;
            if(end==0) {
                break;
            }
            while (start < end) {
                if (A[start] + A[end] == target) {
                    if(start!= i&& end!=i) {
                        count++;
                        break;
                    }
                    else if (start == i) {
                        start++;
                    }
                    else {
                        end--;
                    }

                }
                else if(A[start] + A[end] < target) {
                    start++;
                }
                else {
                    end--;
                }
            }

        }
        System.out.println(count);
        br.close();

    }
}
