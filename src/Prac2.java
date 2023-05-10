import java.util.Scanner;

public class Prac2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        double sum = 0;
        long max = 0;

        for(int i=0;i<N;i++) {
            int tmp = sc.nextInt();
            if(tmp > max)
                max = tmp;
            sum += tmp;
        }
        //A/M*100 + B/M*100 + C/M*100 (A+B+C)/M*100/3
        System.out.println(sum/max*100.0/N);
    }
}
