package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;


public class P10845 {
    static int front =0, rear = 0;
    static int[] queue = new int[10001]; //데이터 10000개 push할 가능성 고려
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        for(int i = 0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int count = st.countTokens();
            String cmd = st.nextToken();
            if (count == 2 && cmd.equals("push")) {
                int num = Integer.parseInt(st.nextToken());
                push(num);
            }
            else if(cmd.equals("pop")) {
                System.out.println(pop());
            }
            else if(cmd.equals("size")) {
                System.out.println(size());
            }
            else if(cmd.equals("empty")) {
                System.out.println(empty());
            }
            else if(cmd.equals("front")) {
                System.out.println(front());
            }
            else if(cmd.equals("back")) {
                System.out.println(back());
            }

        }

    }
    static void push(int n) {
        queue[rear++] = n;
    }
    static int pop() {
        if(empty() == 1) {
            return -1;
        }
        int res = queue[front++];
        return res;

    }
    static int size() {
        return rear-front;
    }

    static int empty() {
        if (size() == 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    static int back() {
        if(empty()==1) {
            return -1;
        }
        return queue[rear-1];

    }
    static int front() {
        if(empty()==1) {
            return -1;
        }
        return queue[front];
    }

}
