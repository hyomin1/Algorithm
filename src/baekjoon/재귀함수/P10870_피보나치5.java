package baekjoon.재귀함수;
import java.io.*;
public class P10870_피보나치5 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        System.out.println(Fibonacci(n));

    }
    static int Fibonacci(int n) {
        if (n == 0) {
            return 0;
        }
        else if(n == 1) {
            return 1;
        }
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
}
