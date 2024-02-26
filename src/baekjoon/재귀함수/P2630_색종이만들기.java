package baekjoon.재귀함수;

import java.util.Scanner;

public class P2630_색종이만들기 {
    static int[][] A;
    static int white = 0, blue = 0;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        A = new int[N][N];
        for(int i = 0; i <N;i++) {
            for(int j=0;j <N; j++) {
                A[i][j] = sc.nextInt();
            }
        }

        paper(0,0,N);
        System.out.println(white);
        System.out.println(blue);
    }
    static void paper(int x, int y, int N) {
        int sum = 0;
        for(int i = x; i<x + N; i++) {
            for(int j = y; j<y + N;j++) {
                sum += A[i][j];
            }
        }
        if (sum == 0) { //모두 white인 경우
            white++;
        }
        else if (sum == N * N) {//모두 blue인 경우
            blue++;
        }
        else { //분할
            int m = N / 2;
            paper(x,y,m); // 1사각형
            paper(x+m,y,m); //2사각형
            paper(x,y+m,m); //3사각형
            paper(x+m, y+m, m); //4사각형
        }




    }
}
