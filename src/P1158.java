import java.io.*;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class P1158 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        Queue<Integer> queue = new LinkedList<>();
        System.out.print("<");
        for(int i = 1; i<=N;i++) {
            queue.add(i);
        }
        while(!queue.isEmpty()) {
            for(int i =0;i<K-1;i++) {
                queue.add(queue.poll());
            }
            if(queue.size() == 1) {
                System.out.println(queue.poll()+ ">");
            }
            else {
                System.out.print(queue.poll() + ", ");
            }

        }

    }
}
