package baekjoon.DP;
import java.io.*;
public class P1003_피보나치함수 {
    static int[] D1;
    static int[] D2;

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        D1 = new int[41];
        D2 = new int[41];

        D1[0] = 1;
        D1[1] = 0;
        D2[0] = 0;
        D2[1] = 1;
        for(int i = 2; i<=40;i++) {
            D1[i] = D1[i-2] + D1[i-1];
            D2[i] = D2[i-2] + D2[i-1];
        }
        for(int i = 0; i<N; i++) {
            int n = Integer.parseInt(br.readLine());
            bw.write(D1[n] + " " + D2[n] + "\n");
        }
        bw.flush();
        bw.close();
    }

}
