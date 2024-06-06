import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        long K = Long.parseLong(st.nextToken());

        long[] A = new long[N*2];
        long[] tmp = new long[N];
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++) {
            tmp[i] = Integer.parseInt(st.nextToken());
        }

        long sum = 0;
        for(int i = 0; i < N; i++) {
            sum += tmp[i];
            A[i] = sum;
        }
        int index = N;
        for(int i = N-1; i >=0; i--) {
            sum += tmp[i];
            A[index++] = sum;
        }
        int answer = 0;
        for(int i = 0; i < A.length-1;i ++) {
            if(K < A[0]) {
                answer = 1;
                break;
            }
            else {
                if(A[i] <= K  && K< A[i+1]) {
                    if(i >= N) {
                        answer = N*2 - 1 - i;
                    }
                    else {
                        answer = i + 2;
                    }
                }
            }
        }
        System.out.println(answer);
    }
}