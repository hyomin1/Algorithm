package baekjoon;
import java.io.*;
import java.util.StringTokenizer;

public class P10866 {
    static int[] deq = new int[20001];
    static int rear = 10000, front = 10000;

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        for(int i =0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();
            if(cmd.equals("push_front")) {
                int num = Integer.parseInt(st.nextToken());
                push_front(num);
            }
            else if(cmd.equals("push_back")) {
                int num = Integer.parseInt(st.nextToken());
                push_back(num);
            }
            else if(cmd.equals("pop_front")) {
                System.out.println(pop_front());
            }
            else if(cmd.equals("pop_back")) {
                System.out.println(pop_back());
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
    static void push_front(int x) {
        deq[front++] = x;
    }
    static void push_back(int x) {
        deq[--rear] = x;

    }
    static int pop_front() {
        if(size()==0) {
            return  -1;
        }
        int res = deq[front-1];
        front--;
        return res;
    }
    static int pop_back() {
        if(size()==0) {
            return -1;
        }
        int res = deq[rear];
        rear++;
        return res;
    }
    static int size() {
        return front-rear;
    }
    static int empty() {
        if(size() == 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    static int front() {
        if(size()==0) {
            return -1;
        }
        return deq[front-1];
    }
    static int back() {
        if(size()==0) {
            return -1;
        }
        return deq[rear];
    }
}
