package baekjoon.재귀함수;
import java.io.*;


public class P2447_별찍기10 {
    static char[][] A;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        A = new char[N][N];
        for(int i = 0;i<N;i++) {
            for(int j = 0; j<N; j++) {
                A[i][j] = ' ';
            }
        }
        star(N,0,0);
        for(int i = 0;i<N;i++) {
            for(int j = 0; j<N; j++) {
                bw.write(A[i][j]);
            }
            bw.write("\n");
        }
        bw.flush();
        bw.close();


    }
    static void star(int N,int x, int y) {
        if(N==1) {
            A[x][y] = '*';
            return;
        }
        int size = N / 3;
        for(int i = 0; i<3; i++) {
            for(int j = 0; j<3;j++) {
                if (i == 1 && j == 1) {
                    continue;
                }
                star(size, x + (size * i) , y + (size * j) );
            }
        }

    }
}
