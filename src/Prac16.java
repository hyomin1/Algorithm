import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Prac16 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int count = 0;


        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i =0; i < N; i++) {
            int num = Integer.parseInt(st.nextToken());
            int check = 0;
            if(num == 1) {
                check++;
            }
            for(int j = 2; j<num;j++) {
                if (num % j == 0) {
                    check++;
                }
            }
            if(check == 0) {
                count++;
            }
        }

        System.out.println(count);
    }
}
