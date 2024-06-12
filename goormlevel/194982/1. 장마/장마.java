import java.io.*;
import java.util.*;

class Main {
    static int[][] day;
    static int[] home;
    static HashSet<Integer> set = new HashSet<>();

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        home = new int[N];

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            home[i] = Integer.parseInt(st.nextToken());
        }
        day = new int[M][2];
        int cnt = 1;
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken()) - 1;
            int e = Integer.parseInt(st.nextToken()) - 1;
            int today = i;
            day[i][0] = s;
            day[i][1] = e;
            rain(s, e, today, cnt);
            cnt++;
        }
        for (int i : home) {
            System.out.print(i + " ");
        }
    }

    static void rain(int s, int e, int today, int cnt) {
        for (int i = s; i <= e; i++) {
            home[i]++;
        }
        if (cnt % 3 == 0) {
            set.clear();
            for (int i = today; i >= today - 2; i--) {
                if (i >= 0) {
                    for (int j = day[i][0]; j <= day[i][1]; j++) {
                        set.add(j);
                    }
                }
            }
            for (int i : set) {
                home[i]--;
            }
        }
    }
}