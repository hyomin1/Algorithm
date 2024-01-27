import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Prac12 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] P = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i =0;i < N; i++) {
            P[i] = Integer.parseInt(st.nextToken());
        }

        for (int i =0;i<N;i++) {
            int max = i;
            for (int j = i + 1; j < N; j++) {
                if(P[j] < P[max]) {
                    max = j;
                }
            }
            if (P[i] > P[max]) {
                int tmp = P[max];
                P[max] = P[i];
                P[i] = tmp;
            }
        }
        int sum = 0;
        for(int i=0;i<N;i++) {
            for(int j=0;j<=i;j++) {
                sum+=P[j];
            }
        }
        System.out.println(sum);
    }
}
