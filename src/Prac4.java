import java.util.Scanner;

public class Prac4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int count =1, sum = 1, start = 1, end = 1;

        while (end != N) {
            if (sum == N) {
                count++;
                end++;
                sum += end;
            }
            else if (sum > N) {
                sum -= start;
                start++;
            }
            else if (sum < N) {
                end++;
                sum += end;
            }
        }
        System.out.println(count);
    }
}
