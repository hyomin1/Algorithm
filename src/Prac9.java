import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;

public class Prac9 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        PriorityQueue<Integer> queue = new PriorityQueue<>((o1, o2) -> {
            int num1 = Math.abs(o1);
            int num2 = Math.abs(o2);
            if(num1==num2){
                return o1 > o2 ? 1 : -1;
            }

            return num1 - num2; //오름차순 (절댓값작은순)

        });
        for(int i =0;i<N;i++) {
            int req = Integer.parseInt(br.readLine());
            if(req==0) {
                if(queue.isEmpty()){
                    System.out.println(0);
                }
                else {
                    System.out.println(queue.poll());
                }
            }
            else {
                queue.add(req);
            }
        }
    }
}
