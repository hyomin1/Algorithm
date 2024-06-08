import java.io.*;
import java.util.*;

public class Main {
    static int[] dx = {-1, 0, 1, 0}; // 북, 서, 남, 동 순서로 이동하는 배열
    static int[] dy = {0, 1, 0, -1};
    static int N, M, answer = 0;
    static boolean[][] cleaned;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        cleaned = new boolean[N][M];

        int[][] clean = new int[N][M];

        st = new StringTokenizer(br.readLine());
        int x = Integer.parseInt(st.nextToken());
        int y = Integer.parseInt(st.nextToken());
        int direction = Integer.parseInt(st.nextToken());

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                clean[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        cleanRoom(x, y, direction, clean);
        System.out.println(answer);
    }

    static void cleanRoom(int x, int y, int direction, int[][] clean) {
        // 현재 위치를 청소한다.

        if(!cleaned[x][y]) {
            cleaned[x][y] = true;
            answer++;
        }


        // 네 방향을 탐색하여 청소할 공간을 찾는다.
        for (int i = 0; i < 4; i++) {
            // 현재 방향을 기준으로 왼쪽 방향으로 회전한다.
            direction = (direction + 3) % 4;
            int nx = x + dx[direction];
            int ny = y + dy[direction];

            // 청소할 수 있는 공간이면서 아직 청소하지 않은 공간인 경우
            if (nx >= 0 && nx < N && ny >= 0 && ny < M && clean[nx][ny] == 0 && !cleaned[nx][ny]) {

                cleanRoom(nx, ny, direction, clean); // 청소를 진행한다.
                return; // 청소를 진행했으면 종료한다.
            }
        }

        // 네 방향 모두 청소할 공간이 없는 경우, 후진한다.
        int backDirection = (direction + 2) % 4; // 후진할 방향
        int nx = x + dx[backDirection];
        int ny = y + dy[backDirection];

        // 후진할 수 있는 공간이면서 벽이 아닌 경우
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && clean[nx][ny] == 0) {
            cleanRoom(nx, ny, direction, clean); // 후진하고 다시 청소를 진행한다.
        }
    }
}
