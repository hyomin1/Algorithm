package baekjoon.정렬;
import java.io.*;
import java.util.*;

public class P18870_좌표압축 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }

        HashMap<Integer,Integer> hashMap = new HashMap<>();
        int[] tmp = A.clone(); //깊은 복사 수행 tmp 정렬해도 A에 영향 x
        Arrays.sort(tmp);
        int index = 0;

        for (int i : tmp) {
            if(!hashMap.containsKey(i)) {
                hashMap.put(i,index++);
            }
        }
        for (int i : A) {
            bw.write(hashMap.get(i) +" ");
        }

        bw.flush();
        bw.close();





    }
}
