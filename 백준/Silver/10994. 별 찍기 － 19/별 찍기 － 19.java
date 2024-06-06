import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    static char[][] A;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int size = (N - 1) * 4;
        A = new char[size+1][size+1];
        for(int i = 0; i <= size; i++) {
            for(int j = 0; j <= size; j++) {
                A[i][j] = ' ';
            }
        }
        drawStar(N,0,size+1);

        for(char[] c : A) {
            for(char ch: c) {
                System.out.print(ch);
            }
            System.out.println();
        }
    }
    static void drawStar(int N,int start, int end) {
        if(N == 1) {
            A[start][start] = '*';
            return;
        }
        for(int i = start; i < end; i++) {
            for(int j = start; j < end; j++) {
                if(i == start || i == end - 1 || j == start || j == end -1) {
                    A[i][j] = '*';
                }
            }
        }
        drawStar(N-1, start+2 , end-2);
    }
}