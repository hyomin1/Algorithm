package baekjoon;

import java.util.Scanner;

public class Prac4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int start = 1, end = 1, count = 1, sum = 1;

        while(end!=N) {
            if(sum == N) {
                count++;
                end++;
                sum += end;
            }
            else if(sum > N) {
                sum -= start;
                start++;
            }
            else {
                end++;
                sum+=end;
            }
        }
        System.out.println(count);

    }
}
