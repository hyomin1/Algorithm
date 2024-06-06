import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int R = Integer.parseInt(st.nextToken());

        int[][]A = new int[N][M];

        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < M; j++) {
                A[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        for(int i = 0; i < R; i++) {
            rotateArr(A,N,M);
        }
        for(int[] i : A) {
            for(int j : i) {
                bw.write(j + " ");
            }
            bw.write("\n");
        }
        bw.flush();
        bw.close();


    }
    static void rotateArr(int[][] A, int N, int M) {
        int size = Math.min(N,M) / 2;
        for(int i = 0; i < size; i++) {
            int tmp = A[i][i];
            int rowStart = i;
            int colStart = i;
            int rowEnd = N - 1 - i;
            int colEnd = M - 1 - i;
            // 왼쪽
            for(int j = colStart; j < colEnd; j++) {
                A[rowStart][j] = A[rowStart][j+1];
            }
            // 위쪽
            for(int j = rowStart; j < rowEnd; j++) {
                A[j][colEnd] = A[j+1][colEnd];
            }
            // 오른쪽
            for(int j = colEnd; j > colStart; j--) {
                A[rowEnd][j] = A[rowEnd][j-1];
            }
            // 아래쪽
            for (int j = rowEnd; j > rowStart; j--) {
                A[j][colStart] = A[j-1][colStart];
            }
            //System.out.println(rowStart + " " + colStart);
            A[rowStart+1][colStart] = tmp;
        }
    }
}