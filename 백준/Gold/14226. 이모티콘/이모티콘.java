import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int S = Integer.parseInt(br.readLine());

        // visited[screen][clipboard]
        boolean[][] visited = new boolean[2001][2001];

        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{1, 0, 0}); // screen, clipboard, time
        visited[1][0] = true;

        while (!q.isEmpty()) {
            int[] cur = q.poll();
            int screen = cur[0];
            int clip = cur[1];
            int time = cur[2];

            // 목표 도달
            if (screen == S) {
                System.out.println(time);
                return;
            }

            // 1. 복사 (화면 → 클립보드)
            // 화면 그대로 클립보드에 저장
            if (!visited[screen][screen]) {
                visited[screen][screen] = true;
                q.add(new int[]{screen, screen, time + 1});
            }

            // 2. 붙여넣기 (클립보드 → 화면)
            if (clip > 0 && screen + clip <= 2000) {
                if (!visited[screen + clip][clip]) {
                    visited[screen + clip][clip] = true;
                    q.add(new int[]{screen + clip, clip, time + 1});
                }
            }

            // 3. 삭제 (화면에서 1개 삭제)
            if (screen > 0) {
                if (!visited[screen - 1][clip]) {
                    visited[screen - 1][clip] = true;
                    q.add(new int[]{screen - 1, clip, time + 1});
                }
            }
        }
    }
}
