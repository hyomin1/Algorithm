import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;


public class Prac8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N =sc.nextInt();

        Queue<Integer> queue = new LinkedList<>();
        for(int i = 1; i <=N;i++) {
            queue.add(i);
        }
        while(true) {
            if(queue.size() == 1) {
                int res = queue.remove();
                System.out.println(res);
                break;
            }
            int tmp1 = queue.remove();
            int tmp2 = queue.remove();

            queue.add(tmp2);
        }

    }
}
