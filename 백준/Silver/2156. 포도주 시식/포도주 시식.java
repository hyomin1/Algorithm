import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        int[] A = new int[n+1];
        int[] D = new int[n+1];

        for(int i = 1; i <= n; i++) {
            A[i] = Integer.parseInt(br.readLine());
        }
        D[1] = A[1];
        if(n >=2) {
            D[2] = D[1] + A[2];
        }
        for(int i = 3; i <=n; i++) {
            D[i] = Math.max(D[i-1],Math.max(D[i-2] + A[i],D[i-3] + A[i-1] + A[i]));
        }

        int max = D[1];
        for(int num : D) {
            max = Math.max(num, max);
        }
        bw.write(max+"\n");
        bw.flush();
        bw.close();

    }
}
