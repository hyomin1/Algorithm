import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        int[] D = new int[N+2];

        int[] T = new int[N+2];
        int[] P = new int[N+2];

        for(int i = 1; i <= N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            T[i] = Integer.parseInt(st.nextToken());
            P[i] = Integer.parseInt(st.nextToken());
        }
        int max = D[0];
        for(int i = 1; i <= N + 1; i++) {
            if(max < D[i]) {
                max = D[i];
            }
            int next = i + T[i];
            if(next > N+ 1) {
                continue;
            }
            D[next] = Math.max(D[next], max + P[i]);
        }
        
        bw.write(D[N+1] + "\n");
        bw.flush();
        bw.close();

    }
}
