package baekjoon;
import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class P11724 {
    static ArrayList<Integer>[] A;
    static boolean[] visited;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        A = new ArrayList[N+1];
        visited = new boolean[N+1];
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
        int cnt = 0;
        for(int i = 1; i<N+1;i++) {
            if(!visited[i]) {
                cnt++;
                DFS(i);
            }
        }
        bw.write(cnt + "");
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
