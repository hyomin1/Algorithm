package baekjoon.자료구조;
import java.io.*;
import java.util.StringTokenizer;


public class P18258_큐2 {
    static int front =0, rear = 0;
    static int[] queue = new int[2000001];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
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
                bw.write(pop() + "\n");
            }
            else if(cmd.equals("size")) {
                bw.write(size() + "\n");
            }
            else if(cmd.equals("empty")) {
                bw.write(empty() + "\n");
            }
            else if(cmd.equals("front")) {
                bw.write(front() + "\n");
            }
            else if(cmd.equals("back")) {
                bw.write(back() + "\n");
            }

        }
        bw.flush();
        bw.close();

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
