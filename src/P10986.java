import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P10986 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        long[] S = new long[N+1];
        long cnt=0;
        long[] C = new long[M];
        st = new StringTokenizer(br.readLine());
        for(int i =1; i<=N;i++) {
            S[i] = S[i-1] + Integer.parseInt(st.nextToken());
            S[i] = S[i] % M;
            if(S[i] == 0) {
                cnt++;
            }
            C[(int)S[i]]++;
        }

        for(int i=0;i<M;i++) {

           // C[S[i]]++;
            if(C[i]>1)
                cnt = cnt + (C[i] *( C[i]-1))/2;

        }
        System.out.println(cnt);
    }
}
