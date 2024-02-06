package baekjoon;

import java.io.*;
import java.util.StringTokenizer;

public class P1517 {
    static long result = 0;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N+1];
        int[] tmp = new int[N+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 1; i<=N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        merge_sort(1,N,A,tmp);
        bw.write(result+"");
        bw.flush();
        bw.close();


    }
    static void merge_sort(int s, int e, int[] A ,int[] tmp) {
        if(e-s < 1) {
            return;
        }
        int m = s + (e-s) / 2;
        merge_sort(s,m,A,tmp);
        merge_sort(m+1,e,A,tmp);
        for(int i = s; i<=e;i++) {
            tmp[i] = A[i];
        }
        int i = s;
        int index1 = s, index2 = m+1;
        while(index1<=m && index2 <= e) {
            if(tmp[index1] > tmp[index2]) {
                A[i] = tmp[index2];
                result = result + index2 - i;
                index2++;
                i++;
            }
            else {
                A[i] = tmp[index1];
                index1++;
                i++;
            }
        }
        while(index1<=m) {
            A[i] = tmp[index1];
            index1++;
            i++;
        }
        while(index2<=e) {
            A[i] = tmp[index2];
            index2++;
            i++;
        }

    }
}
