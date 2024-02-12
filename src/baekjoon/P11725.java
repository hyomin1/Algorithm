package baekjoon;
import java.io.*;
import java.util.*;
public class P11725 {
    static boolean[] visited;
    static ArrayList<Integer>[] A;
    static int[] answer;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        visited = new boolean[N+1];
        A = new ArrayList[N+1];
        answer = new int[N+1];


        for(int i = 1; i<N+1;i++) {
            A[i] = new ArrayList<Integer>();
        }
        for(int i = 0; i<N-1;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            A[u].add(v);
            A[v].add(u);
        }
        for(int i = 1; i<N+1;i++) {
            if(!visited[i]) {
                DFS(i);
            }
        }
        for(int i = 2;i<N+1;i++) {
            bw.write(answer[i] + "\n");
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
                answer[i] = v;
                DFS(i);
            }
        }
    }
}
