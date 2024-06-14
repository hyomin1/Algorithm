import java.io.*;
import java.util.*;

class Main {
    static int[] dy = {-1, 1, 0, 0};
    static int[] dx = {0, 0, 1, -1};
    static String[][] map;
    static int N;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        map = new String[N][N];
        boolean[][] gVisited = new boolean[N][N];
        boolean[][] pVisited = new boolean[N][N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        int gr = Integer.parseInt(st.nextToken()) - 1;
        int gc = Integer.parseInt(st.nextToken()) - 1;
        st = new StringTokenizer(br.readLine());
        int pr = Integer.parseInt(st.nextToken()) - 1;
        int pc = Integer.parseInt(st.nextToken()) - 1;
        
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                map[i][j] = st.nextToken();
            }
        }

        int goorm = gamePlay(gc, gr, gVisited);
        int player = gamePlay(pc, pr, pVisited);

        if (goorm > player) {
            System.out.println("goorm " + goorm);
        } else {
            System.out.println("player " + player);
        }
    }

    static int gamePlay(int x, int y, boolean[][] visited) {
        int answer = 1;
        visited[y][x] = true; // 처음 위치도 방문함
        
        while (true) {
            String str = map[y][x];
						String sNum = "";
						
						for(int i = 0; i < str.length(); i++) {
							if(str.charAt(i) >= '0' && str.charAt(i) <= '9') {
								sNum += str.charAt(i);
							}
						}
            int count = Integer.parseInt(sNum);
            char cmd = str.charAt(str.length()-1);
            boolean check = true;

            for (int i = 0; i < count; i++) {
                if (cmd == 'U') {
                    y = (y + dy[0] + N) % N;
                } else if (cmd == 'D') {
                    y = (y + dy[1] + N) % N;
                } else if (cmd == 'R') {
                    x = (x + dx[2] + N) % N;
                } else if (cmd == 'L') {
                    x = (x + dx[3] + N) % N;
                }

                if (!visited[y][x]) {
                    visited[y][x] = true;
                    answer++;
                } else {
                    check = false;
                    break;
                }
            }

            if (!check) {
                break;
            }
        }
        
        return answer;
    }
}
