package baekjoon.재귀함수;
import java.io.*;
import java.math.BigInteger;

public class P1914_하노이탑 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        BigInteger moves = BigInteger.valueOf(2).pow(N).subtract(BigInteger.ONE);
        System.out.println(moves);
        if(N <= 20) {
            hanoi(N,1,2,3);
        }


    }
    static void hanoi(int n,int start, int aux, int end) {
        if(n == 1) {
            System.out.println(start + " " + end);
        }
        else {
            hanoi(n-1,start,end,aux);
            System.out.println(start + " " + end);
            hanoi(n-1,aux,start,end);
        }


    }
}
