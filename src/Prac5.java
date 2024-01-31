import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Prac5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i =0;i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A);
        int start = 0;
        int end = N -1;
        int count=0;
        while(start < end) {
            if(A[start] + A[end] == M) {
                count++;
                start++;
                end--;
            }
            else if (A[start] + A[end] > M) {
                end--;
            }
            else {
                start++;
            }
        }
        System.out.println(count);



    }
}
