package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P1943 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        for(int i = 0; i< T;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int A = Integer.parseInt(st.nextToken());
            int B = Integer.parseInt(st.nextToken());
            int min = Math.min(A,B);
            int gcd = 0;
            for(int j = 1; j<=min;j++) {
                if(A%j == 0 && B % j==0){
                    gcd = j;
                }
            }
            int answer = gcd * (A/gcd) * (B/gcd);
            System.out.println(answer);

        }
    }
}
