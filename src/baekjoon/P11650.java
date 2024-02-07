package baekjoon;
import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class P11650 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[][] A = new int[N][2];
        for(int i = 0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            A[i][0] = Integer.parseInt(st.nextToken());
            A[i][1] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A,(a,b) -> {
            if(a[0] == b[0]) { //x좌표 같을 경우 y좌표 비교
                return a[1] - b[1];
            }
            else {
                return a[0] - b[0];
            }
        });
        for (int[] ints : A) {
            System.out.println(ints[0] +" " + ints[1]);

        }


    }
}
