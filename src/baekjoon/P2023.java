package baekjoon;
import java.io.*;

public class P2023 {
    static int N;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());

        DFS(2,1);
        DFS(3,1);
        DFS(5,1);
        DFS(7,1);

    }
    static void DFS(int num, int digit) {
        if(digit == N) {
            if(isPrime(num)) {
                System.out.println(num);
            }
            return;
        }
        for(int i =1 ; i<10; i+=2) {
            if(isPrime(num * 10 + i)) {
                DFS(num * 10 + i , digit+1);
            }
        }
    }
    static boolean isPrime(int num) {
        for(int i = 2; i<num;i++) {
            if(num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
