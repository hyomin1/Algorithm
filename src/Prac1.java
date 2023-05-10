import java.util.*;

public class Prac1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int sum = 0;

        String s = sc.next();
        char c[] = s.toCharArray(); //string -> charArray
        for(int i=0;i<n;i++) {
            sum += c[i] - '0';
        }
        System.out.println(sum);













    }
}
