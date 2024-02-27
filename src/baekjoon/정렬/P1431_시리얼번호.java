package baekjoon.정렬;
import java.io.*;
import java.util.*;

public class P1431_시리얼번호 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        String[] A = new String[N];

        for(int i = 0; i<N; i++) {
            A[i] = br.readLine();
        }

        Arrays.sort(A,(a,b) -> {
            if(a.length() != b.length()) {
                return a.length() - b.length();
            }
            else {
                int sum1 =0, sum2 = 0;
                for(int i = 0; i<a.length();i++) {
                    if(a.charAt(i) >= '0' && a.charAt(i) <= '9') {
                        sum1 += Integer.parseInt(String.valueOf(a.charAt(i)));
                    }
                }
                for(int i = 0; i<b.length();i++) {
                    if(b.charAt(i) >= '0' && b.charAt(i) <= '9') {
                        sum2 += Integer.parseInt(String.valueOf(b.charAt(i)));
                    }
                }
                if(sum1 == sum2) {
                    return a.compareTo(b);
                }
                else {
                    return sum1 - sum2;
                }

            }
        });
        for (String s : A) {
            bw.write(s + "\n");
        }
        bw.flush();
        bw.close();

    }
}
