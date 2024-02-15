package baekjoon;
import java.io.*;
import java.util.*;
public class P1920 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] A = new int[N];
        for(int i = 0 ; i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A); //이진 탐색은 정렬
        int M = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i <M;i++) {
            int n = Integer.parseInt(st.nextToken());
            int s = 0;
            int e = N - 1;
            boolean find = false;
            while(s <= e) {
                int midIndex = (s + e) / 2;
                int midValue = A[midIndex];
                if(n < midValue) {
                    e = midIndex - 1;
                }
                else if(n > midValue) {
                    s = midIndex + 1;
                }
                else {
                    find = true;
                    break;
                }
            }
            if (find) {
                bw.write(1 + "\n");
            }
            else {
                bw.write(0 + "\n");
            }
        }
        bw.flush();
        bw.close();

    }
}
