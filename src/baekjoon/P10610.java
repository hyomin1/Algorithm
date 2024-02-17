package baekjoon;

import java.io.*;
import java.util.Arrays;


public class P10610 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String N = br.readLine();
        char[] c = N.toCharArray();
        int[] A = new int[c.length];
        for(int i = 0; i<c.length;i++) {
            A[i] = c[i] - '0';
        }
        Arrays.sort(A);
        int sum = 0;
        for(int i = 0; i<A.length;i++) {
            sum += A[i];
        }
        if(sum % 3 ==0 && A[0] == 0) {
            for(int i = A.length-1; i>=0;i--) {
                bw.write(A[i]+"");
            }
        }
        else {
            bw.write(-1+"");
        }
        bw.flush();
        bw.close();


    }
}
