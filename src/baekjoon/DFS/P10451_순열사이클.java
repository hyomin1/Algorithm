package baekjoon.DFS;
import java.io.*;
import java.util.*;

public class P10451_순열사이클 {
    static ArrayList<Integer>[] A;
    static boolean[] visited;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());
        for(int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            A = new ArrayList[N+1];
            visited = new boolean[N+1];
            for(int j = 1 ; j <= N; j++) {
                A[j] = new ArrayList<>();
            }
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j = 1; j <= N; j++) {
                int u = Integer.parseInt(st.nextToken());
                A[j].add(u);
            }
            int answer = 0;
            for(int j = 1 ; j <= N; j++) {
                if(!visited[j]) {
                    answer++;
                    DFS(j);
                }
            }
            bw.write(answer+"\n");
        }
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
                DFS(i);
            }
        }
    }
}
