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

        for (int i = 0; i < N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A);

        int i = 0, j = N - 1, cnt = 0;

        while(i < j) {
            if (A[i] + A[j] == M) {
                cnt++;
                i++;
                j--;
            }
            else if (A[i] + A[j] < M) {
                i++;
            }
            else {
                j--;
            }
        }
        System.out.println(cnt);



    }
}
