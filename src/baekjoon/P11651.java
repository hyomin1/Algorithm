package baekjoon;
import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class P11651 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[][] A = new int[N][2];

        for(int i =0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            A[i][0] = Integer.parseInt(st.nextToken());
            A[i][1] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A, (a,b) -> {
            if(a[1] == b[1]) { //y좌표 같으면 x좌표 기준 정렬
                return a[0] - b[0];
            }
            else {
                return a[1] - b[1];
            }
        });
        for (int[] ints : A) {
            bw.write(ints[0] + " " +  ints[1] + "\n");

        }
        bw.flush();
        bw.close();
    }
}
