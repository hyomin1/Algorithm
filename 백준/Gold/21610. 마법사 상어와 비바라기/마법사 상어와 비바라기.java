import java.io.*;
import java.util.*;

public class Main {
    static int[] dx = {-1,-1,0,1,1,1,0,-1};
    static int[] dy = {0,-1,-1,-1,0,1,1,1};

    static int[] rx = {-1,1,-1,1};
    static int[] ry = {1,1,-1,-1};
    static int N;
    static int[][] map;
    static boolean[][] cloud, copyCloud;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        map = new int[N+1][N+1];
        cloud = new boolean[N+1][N+1];
        copyCloud = new boolean[N+1][N+1];

        for(int i = 1; i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 1; j <= N; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        // 비바라기 시전
        cloud[N][1] = true;
        cloud[N][2] = true;
        cloud[N-1][1] = true;
        cloud[N-1][2] = true;

        for(int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int direction = Integer.parseInt(st.nextToken());
            int move = Integer.parseInt(st.nextToken());
            rain(direction,move);
            checkLine();
            minusWater();
        }


        int answer = 0;
        for(int i = 1; i <=N;i++) {
            for(int j = 1; j <= N; j++) {
                answer += map[i][j];
            }
        }
        System.out.println(answer);



    }
    static void rain(int direction, int move) {
        for(int i = 1; i <= N; i++) {
            for(int j = 1; j <= N; j++) {
                if(cloud[i][j]) {
                    //direction 방향으로 move만큼이동
                    int nx = (j + (dx[direction-1] + N) * move) % N;
                    int ny = (i + (dy[direction-1]+ N) * move) % N;
                    if(nx == 0) nx = N;
                    if(ny == 0) ny = N;

                    map[ny][nx] += 1; // 비내림
                    cloud[i][j] = false; // 구름제거
                    copyCloud[ny][nx] = true; //구름 왔던 곳 위치 체크
                }
            }
        }

    }
    static void checkLine() {
        for(int i = 1; i <= N; i++) {
            for(int j = 1; j <= N; j++) {
                if(copyCloud[i][j]) {
                    for(int k = 0; k < 4; k++) {
                        int nx = rx[k] + j;
                        int ny = ry[k] + i;
                        // 대각선 물바구니수 체크
                        if(nx >= 1 && nx <=N && ny >=1 && ny <=N && map[ny][nx] > 0) {
                            map[i][j]++;
                        }
                    }
                }
            }
        }

    }
    static void minusWater() {
        for(int i = 1; i <= N; i++) {
            for(int j = 1; j <= N; j++) {
                if(!copyCloud[i][j] && map[i][j] >= 2) {
                    map[i][j] -=2;
                    cloud[i][j] = true; //구름 생성
                }
                else if(copyCloud[i][j]) copyCloud[i][j] = false;

            }
        }
    }
}