import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Prac14 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] A = new int[3];
        StringTokenizer st = new StringTokenizer(br.readLine());

        for(int i = 0; i < 3; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }

        for(int i =0;i<A.length-1;i++) {
            for(int j = 0;j<A.length-i-1;j++) {
                if(A[j] > A[j+1]) {
                    int tmp = A[j];
                    A[j] = A[j+1];
                    A[j+1] = tmp;
                }
            }
        }
        System.out.println(A[1]);
    }
}
