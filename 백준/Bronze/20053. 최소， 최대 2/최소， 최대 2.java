import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        for(int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            int[] arr = new int[N];
            StringTokenizer st = new StringTokenizer(br.readLine());

            for(int j = 0; j < N; j++) {
                arr[j] = Integer.parseInt(st.nextToken());
            }
            findMaxMin(arr);

        }

    }
    static void findMaxMin(int[] arr) {
        int max = arr[0];
        int min = arr[0];
        for(int i : arr) {
            if(max < i) max = i;
            if(min > i) min = i;
        }
        System.out.println(min + " " + max);
    }
}