package baekjoon;
import java.io.*;
import java.util.*;
public class P1747 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] A = new int[10003002]; //크기 설정 주의
        for(int i = 2; i<A.length;i++) {
            A[i] = i;
        }
        for(int i = 2; i<=Math.sqrt(1000000);i++) {
            if(A[i] == 0) {
                continue;
            }
            for(int j = i+i; j<A.length;j=i+j) {
                if(A[j] == 0) {
                    continue;
                }
                A[j] = 0;
            }
        }
        int i = N;
        while(true) { //끝의 범위가 따로 주어지지 않음
            if (A[i] != 0 && isPalindrome(A[i])) {
                bw.write(A[i] + "\n");
                break;
            }
            i++;
        }


        bw.flush();
        bw.close();

    }
    static boolean isPalindrome(int num) {
        char c[] = String.valueOf(num).toCharArray();
        int s = 0, e = c.length-1;
        while(s<=e) {
            if(c[s] != c[e]) {
                return false;
            }
            s++;
            e--;
        }
        return true;
    }
}
