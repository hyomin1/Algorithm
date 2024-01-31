import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Prac1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        String str = br.readLine();
        char c[] = str.toCharArray();

        int sum = 0;
        for (int i = 0; i < c.length; i++) {
            sum += c[i] - '0';
        }
        System.out.println(sum);
    }
}

