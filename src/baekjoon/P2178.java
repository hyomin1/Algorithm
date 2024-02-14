package baekjoon;
import java.io.*;
import java.util.*;
public class P2178 {
    static boolean[][] visited;
    static int[] dx = {1,0,-1,0};
    static int[] dy = {0,1,0,-1};
    static int N, M;
    static int[][] A;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        visited = new boolean[N][M];
        A = new int[N][M];

        for(int i = 0; i<N;i++) {
            String str = br.readLine();
            for(int j = 0; j<M;j++) {
                A[i][j] = Integer.parseInt(str.substring(j,j+1));
            }
        }
        BFS(0,0);
        bw.write(A[N-1][M-1] + "");
        bw.flush();
        bw.close();


    }
    static void BFS(int i, int j) {
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] {i,j});
        visited[i][j] = true;

        while(!queue.isEmpty()) {
            int[] now = queue.poll();
            for(int k = 0; k<4;k++) {
                int x = now[0] + dx[k];
                int y = now[1] + dy[k];
                if(x>=0 && y>=0 && x < N && y < M) {
                    if(!visited[x][y] && A[x][y] != 0) {
                        queue.add(new int[] {x,y});
                        visited[x][y] = true;
                        A[x][y] = A[now[0]][now[1]] + 1;
                    }
                }
            }
        }
    }
}
