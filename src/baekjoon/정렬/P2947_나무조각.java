package baekjoon.정렬;
import java.io.*;
import java.util.StringTokenizer;

public class P2947_나무조각 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int[] A = new int[5];
        for(int i = 0 ; i<5;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        for(int i = 0; i<5;i++) {
            for(int j = 0;j<4;j++) {
                if(A[j] > A[j+1]) {
                    int tmp = A[j+1];
                    A[j+1] = A[j];
                    A[j] = tmp;
                    for(int k = 0; k<5; k++) {
                        bw.write(A[k] + " ");
                    }
                    bw.write("\n");
                }
            }
        }
        bw.flush();
        bw.close();

    }
}
