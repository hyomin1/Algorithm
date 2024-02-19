package baekjoon;
import java.io.*;
import java.util.StringTokenizer;

public class P1978 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int[] A = new int[1001];
        for(int i = 2;i<A.length;i++) {
            A[i] = i;
        }
        for(int i = 2; i<Math.sqrt(A.length);i++) {
            if(A[i] ==0) {
                continue;
            }
            for(int j = i+i; j<A.length;j = i + j) {
                if(A[j] == 0) {
                    continue;
                }
                A[j] = 0;
            }
        }
        StringTokenizer st = new StringTokenizer(br.readLine());
        int answer = 0;
        for(int i = 0; i<N;i++) {
            int n = Integer.parseInt(st.nextToken());
            if(A[n] != 0) {
                answer++;
            }
        }
        bw.write(answer + "\n");
        bw.flush();
        bw.close();

    }
}
