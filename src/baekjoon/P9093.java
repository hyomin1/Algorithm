package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P9093 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());


        for(int i = 0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int num = st.countTokens();
            for(int j =0;j<num;j++) {
                StringBuffer sb = new StringBuffer(st.nextToken());
                System.out.print(sb.reverse()+" ");
            }
            System.out.println();

        }



    }
}
