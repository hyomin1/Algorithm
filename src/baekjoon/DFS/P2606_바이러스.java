package baekjoon.DFS;
import java.util.*;
import java.io.*;

public class P2606_바이러스 {
    static ArrayList<Integer>[] A;
    static boolean[] visited;
    static int answer = 0;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());

        A = new ArrayList[N+1];
        visited = new boolean[N+1];
        for(int i = 1; i <= N; i++) {
            A[i] = new ArrayList<>();
        }

        for(int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            A[u].add(v);
            A[v].add(u);
        }
        DFS(1);
        bw.write(answer + "\n");
        bw.flush();
        bw.close();
    }
    static void DFS(int v) {
        if(visited[v]) {
            return;
        }
        visited[v] = true;
        for(int i : A[v]) {
            if(!visited[i]) {
                answer++;
                DFS(i);
            }
        }
    }
}
