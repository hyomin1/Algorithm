package baekjoon;
import java.io.*;
import java.util.*;
public class P1744 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int one = 0; //idea
        int zero = 0; // idea
        //음수 , 1보다 큰수, 0 ,1 묶기
        PriorityQueue<Integer> plus = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> minus = new PriorityQueue<>();
        for(int i = 0; i<N;i++) {
            int number = Integer.parseInt(br.readLine());
            if(number >1) {
                plus.add(number);
            }
            else if(number == 1) {
                one++;
            }
            else if(number ==0) {
                zero++;
            }
            else {
                minus.add(number);
            }

        }
        int answer = 0;
        while (plus.size() > 1) {
            int n1 = plus.poll();
            int n2 = plus.poll();
            answer += n1 * n2;
        }
        while(minus.size() > 1) {
            int n1 = minus.poll();
            int n2 = minus.poll();
            answer += n1 * n2;
        }
        if(!plus.isEmpty()) {
            answer += plus.poll();
        }
        if(!minus.isEmpty()) {
            if(zero == 0) {
                answer += minus.poll();
            }
        }
        if(one !=0)
            answer += one;

        bw.write(answer + "\n");
        bw.flush();
        bw.close();

    }
}
