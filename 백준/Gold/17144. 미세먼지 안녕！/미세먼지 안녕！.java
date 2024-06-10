import java.util.*;
import java.io.*;

public class Main {
    static int[] dx = {-1,1,0,0};
    static int[] dy ={0,0,-1,1};

    static int[] r;
    static int[] c;
    static int[][] map;
    static int R;
    static int C;
    static int[][] copyMap;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        int T = Integer.parseInt(st.nextToken());

        r = new int[2];
        c = new int[2];
        map = new int[R][C];

        int ridx = 0;
        int cidx = 0;
        for(int i = 0; i < R; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < C; j++) {
                int dust = Integer.parseInt(st.nextToken());
                map[i][j] = dust;

                if(dust == -1) {
                    r[ridx++] = i;
                    c[cidx++] = j;
                }
            }
        }

        for(int i = 0; i < T; i++) {
            spread();
            plusDust();
            cleaner();
        }

        int answer = 0;
        for(int[] i: map) {
            for(int j : i) {
                answer += j;
            }
        }
        System.out.println(answer + 2);

    }

    static void spread() {
        copyMap = new int[R][C];
        for(int i = 0; i < R; i++) {
            for(int j = 0; j < C; j++) {
                //미세먼지 확산
                int dust = map[i][j] / 5;
                int count = 0;
                for(int k = 0; k < 4; k++) {
                    int x = i + dx[k];
                    int y = j + dy[k];
                    if(x >= 0 && x < R && y >=0 && y < C &&
                    map[x][y] > -1) {
                        count++; //확산 가능한 곳 개수
                        copyMap[x][y] += dust;
                    }
                }
                map[i][j] -= dust*count;
            }
        }
    }
    static void plusDust() {
        for(int i = 0; i < R; i++) {
            for(int j = 0; j < C; j++) {
                map[i][j] += copyMap[i][j];
            }
        }
    }
    static void cleaner() {
        //위쪽 공기 청정기
        int up = r[0];
        //top -> bottom
        for(int i = up-1; i > 0; i--) {
            map[i][0] = map[i-1][0];
        }
        //right -> left
        for(int i = 0; i < C-1; i++) {
            map[0][i] = map[0][i+1];
        }
        //bottom -> top
        for(int i = 0; i < up; i++) {
            map[i][C-1] = map[i+1][C-1];
        }
        //left -> right
        for(int i = C-1; i > 1; i--) {
            map[up][i] = map[up][i-1];
        }
        map[up][1] = 0; //공기 청정기 옆자리

        //아래 공기청정기
        int down = r[1];
        //bottom -> top
        for(int i = down+1; i < R-1; i++) {
            map[i][0] = map[i+1][0];
        }
        //right -> left
        for(int i = 0; i < C-1; i++) {
            map[R-1][i] = map[R-1][i+1];
        }
        //top -> bottom
        for(int i = R-1; i > down; i--) {
            map[i][C-1] = map[i-1][C-1];
        }
        //left -> right
        for(int i = C-1; i > 1; i--) {
            map[down][i] = map[down][i-1];
        }
        map[down][1] = 0;


    }

}