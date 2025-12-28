import java.io.*;
import java.util.*;

/**
 * boj 1202 보석 도둑
 * 그리디
 *
 * 보석 무게 가격순 정렬
 * 가방 무게순 정렬
 */


public class Main {

    static int N, K;
    static List<int[]> diamonds = new ArrayList<>();
    static int[] backpack;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int m = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());

            diamonds.add(new int[]{m,v});
        }

        backpack = new int[K];
        for (int i = 0; i < K; i++) {
            backpack[i] = Integer.parseInt(br.readLine());
        }

        Collections.sort(diamonds, (d1, d2) -> {
            return d1[0] - d2[0];
        });

        Arrays.sort(backpack);

        int idx = 0;
        long answer = 0;
        Queue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());

        for (int maxWeight : backpack) {
            for (; idx < diamonds.size(); idx++) {
                int[] dia = diamonds.get(idx);
                if (maxWeight >= dia[0]) {
                    pq.add(dia[1]);
                    continue;
                }
                break;
            }

            if (!pq.isEmpty()) {
                answer += pq.poll();
            }
        }

        System.out.println(answer);
    }
}
