package baekjoon;
import java.io.*;
import java.util.*;
public class P1260 {
    static boolean[] visited;
    static ArrayList<Integer>[] A;

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        ;
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int V = Integer.parseInt(st.nextToken());

        visited = new boolean[N+1];
        A = new ArrayList[N+1];

        for(int i = 1; i<N+1;i++) {
            A[i] = new ArrayList<Integer>();
        }
        for(int i = 0; i<M;i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            A[u].add(v);
            A[v].add(u);
        }
        for(int i = 1; i<N+1;i++) {
            Collections.sort(A[i]);
        }


        DFS(V);
        System.out.println();
        visited = new boolean[N+1];
        BFS(V);

    }
    static void DFS(int v) {
        System.out.print(v + " ");
        if (visited[v]) {
            return;
        }
        visited[v] = true;
        for(int i : A[v]) {
            if(!visited[i]) {
                DFS(i);
            }
        }
    }
    static void BFS(int v) {
        Queue<Integer> queue = new LinkedList<>();

        queue.add(v);
        visited[v] = true;
        while(!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            for(int i : A[node]) {
                if(!visited[i]) {
                    visited[i] = true;
                    queue.add(i);
                }
            }
        }


        for(int i : A[v]) {
            if(!visited[i]) {

            }
        }

    }
}
