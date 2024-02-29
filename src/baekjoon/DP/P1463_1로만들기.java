package baekjoon.DP;
import java.io.*;
public class P1463_1로만들기 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int[] D = new int[N+1];

        D[1] = 0;

        for(int i = 2; i<=N;i++) {
            D[i] = D[i-1] + 1; // 1을 빼는 연산, D[4] = D[3] + 1 = 2
            if(i % 2 == 0) { //2로 나누는 연산  D[4] = D[4/2] + 1 = 2
                D[i] = Math.min(D[i], D[i/2] + 1);
            }
            if(i % 3 == 0) { //3으로 나누는 연산 D[6] = D[6/2] + 1 = 2
                D[i] = Math.min(D[i], D[i/3] + 1);
            }
        }
        bw.write(D[N] + "\n");
        bw.flush();
        bw.close();



    }

}
