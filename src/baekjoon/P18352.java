package baekjoon;
import java.io.*;
import java.util.*;
public class P18352 {
    static boolean[] visited;
    static int[] answer;
    static ArrayList<Integer>[] A;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw= new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        boolean check = false;
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        int X = Integer.parseInt(st.nextToken());

        visited = new boolean[N+1];
        answer = new int[N+1];
        A = new ArrayList[N+1];
        for(int i = 1; i<N+1;i++) {
            A[i] = new ArrayList<Integer>();
        }
        for(int i = 0; i<M;i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            A[u].add(v);
        }
        BFS(X);

        for(int i = 1; i<N+1;i++) {
            if (answer[i] == K) {
                check = true;
                bw.write(i + "\n");

            }
        }
        if (!check) {
            bw.write(-1 + "\n");
        }
        bw.flush();
        bw.close();

    }
    static void BFS(int v) {
        Queue<Integer> queue = new LinkedList<>();
        visited[v] = true;
        queue.add(v);
        answer[v] = 0;

        while(!queue.isEmpty()) {
            int node = queue.poll();
            for(int i : A[node]) {
                if(!visited[i]) {
                    visited[i] = true;
                    queue.add(i);
                    answer[i] = answer[node] + 1;
                }

            }

        }


    }
}
