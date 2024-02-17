package baekjoon;
import java.io.*;
import java.util.*;
public class P1931 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[][] A = new int[N][2];
        for(int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            A[i][0] = Integer.parseInt(st.nextToken());
            A[i][1] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A,(a,b) -> {
            if(a[1] == b[1]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
        int count = 0;
        int end = -1;
        for(int i = 0 ;i < N ;i++) {
            if(A[i][0] >= end) {
                end = A[i][1];
                count++;
            }
        }
        bw.write(count + "");
        bw.flush();
        bw.close();

    }
}
