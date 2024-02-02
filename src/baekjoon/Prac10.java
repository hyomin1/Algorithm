package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Prac10 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        for (int i = 0; i < N; i++){
            A[i] = Integer.parseInt(br.readLine());
        }
        for(int i =0;i<N-1;i++) {
            for(int j =0; j<N-i-1;j++) {
                if (A[j] > A[j+1]) {
                    int tmp = A[j+1];
                    A[j+1] = A[j];
                    A[j] = tmp;
                }
            }
        }
        for (int i : A) {
            System.out.println(i);

        }
    }
}
