import java.io.*;
import java.util.*;
public class Main {
    static BufferedReader br;
    public static void main(String[] args) throws IOException{
         br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        for(int i = 0; i < T; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());
            int d = Integer.parseInt(st.nextToken());
            int[][] A = new int[n][n];
            for(int j = 0; j < n; j++) {
                st = new StringTokenizer(br.readLine());
                for(int k = 0; k < n; k++) {
                    A[j][k] = Integer.parseInt(st.nextToken());
                }
            }
            int size = d / 45;
            if(size > 0) { //시계 방향
                for(int j = 0; j < size; j++) {
                    A = turnRightArray(A);
                }
            }
            else { //반시계 방향
                for(int j = 0; j < Math.abs(size); j++) {
                    A = turnLeftArray(A);
                }
            }

            for(int[] nums : A) {
                for(int num: nums){
                    System.out.print(num + " ");
                }
                System.out.println();
            }



        }

    }
    static int[][] turnRightArray(int[][] A) {
        int mid = A.length / 2;
        int n = A.length;
        int[][] newArr = new int[n][n];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(i == j) { // 1번 방식
                    newArr[i][mid] = A[i][j];
                }
                if(j == mid) { //2번 방식
                    newArr[i][n-1-i] = A[i][j];
                }
                if(i+j == n-1) { //3번 방식
                    newArr[mid][j] = A[i][j];
                }
                if(i == mid) { //4번 방식
                    newArr[j][j] = A[i][j];
                }
            }

        }
        //빈 값 그대로 채워 넣기
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(newArr[i][j] == 0) {
                    newArr[i][j] = A[i][j];
                }
            }
        }
        return newArr;

    }
    static int[][] turnLeftArray(int[][] A) {
        int mid = A.length / 2;
        int n = A.length;
        int[][] newArr = new int[n][n];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(i == j) { // 1번 방식
                    newArr[mid][j] = A[i][j];
                }
                if(j == mid) { //2번 방식
                    newArr[i][i] = A[i][j];
                }
                if(i+j == n-1) { //3번 방식
                    newArr[i][mid] = A[i][j];
                }
                if(i == mid) { //4번 방식
                    newArr[n-1-j][j] = A[i][j];
                }
            }

        }
        //빈 값 그대로 채워 넣기
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(newArr[i][j] == 0) {
                    newArr[i][j] = A[i][j];
                }
            }
        }
        return newArr;
    }
}