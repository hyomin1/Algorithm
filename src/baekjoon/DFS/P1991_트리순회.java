package baekjoon.DFS;
import java.io.*;
import java.util.*;
public class P1991_트리순회 {
    static ArrayList<Integer>[] S;
    static int N;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        N = Integer.parseInt(br.readLine());
        S = new ArrayList[N];
        for(int i = 0; i < N; i++) {
            S[i] = new ArrayList<>();
        }

        for(int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int node = st.nextToken().charAt(0) - 'A';
            char left = st.nextToken().charAt(0);
            char right = st.nextToken().charAt(0);
            if(left != '.') {
                S[node].add(left - 'A');
            }
            else {
                S[node].add(-1);
            }

            if(right != '.') {
                S[node].add(right - 'A');
            }
            else {
                S[node].add(-1);
            }
        }
        preOrder(0);
        init();
        inOrder(0);
        init();
        postOrder(0);


    }
    static void init() {
        System.out.println();
    }
    static void preOrder(int v) {
        if(v == -1) {
            return;
        }
        System.out.print((char) (v + 'A'));
        preOrder(S[v].get(0));
        preOrder(S[v].get(1));


    }
    static void inOrder(int v) {
        if(v == -1) {
            return;
        }
        inOrder(S[v].get(0));
        System.out.print((char) (v + 'A'));
        inOrder(S[v].get(1));


    }
    static void postOrder(int v) {
        if(v == -1){
            return;
        }
        postOrder(S[v].get(0));
        postOrder(S[v].get(1));
        System.out.print((char)(v + 'A'));


    }
}
