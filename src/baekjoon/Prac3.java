package baekjoon;

import java.util.*;
import java.io.*;

public class Prac3 {
    public static  void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in)); //많은 양의 데이터 읽을때는 Scanner보다 BufferReader


        StringTokenizer stringTokenizer = new StringTokenizer(bufferedReader.readLine()); // ex)5 3 입력 n = 5 m =3

        int n = Integer.parseInt(stringTokenizer.nextToken());
        int m = Integer.parseInt(stringTokenizer.nextToken());
        
        long[]S = new long[n+1]; //덧셈 곱셈 많을경우 long형이 좋음

        stringTokenizer = new StringTokenizer(bufferedReader.readLine()); // ex) 5 4 3 2 1 입력
        for(int i=1;i<=n;i++) {
            S[i] = S[i-1]+ Integer.parseInt(stringTokenizer.nextToken());
        }
        for(int q=0;q<m;q++) {
            stringTokenizer = new StringTokenizer(bufferedReader.readLine());
            //구간 ex) 1 3 -> i = 1 j = 3
            int i = Integer.parseInt(stringTokenizer.nextToken());
            int j = Integer.parseInt(stringTokenizer.nextToken());
            System.out.println(S[j]-S[i-1]);
        }

    }
}
