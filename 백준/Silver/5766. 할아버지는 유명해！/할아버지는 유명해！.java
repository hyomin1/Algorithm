import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while(true) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken());
            int M = Integer.parseInt(st.nextToken());
            if(N == 0 && M ==0) break;
            Map<Integer,Integer> map = new HashMap<>();

            int max = 0;
            for(int i = 0; i < N; i++) {
                st = new StringTokenizer(br.readLine());
                for(int j = 0; j < M; j++) {
                    int num = Integer.parseInt(st.nextToken());
                    if(max < num) max = num;
                    map.put(num,map.getOrDefault(num,0)+1);
                }
            }
            int[] rank = new int[max+1];
            for(int i : map.keySet()) {
                rank[i] = map.get(i);
            }
            Arrays.sort(rank);
            int second = 0;
            for(int i = rank.length-1; i >0; i--) {
                if(rank[i] != rank[i-1]) {
                    second = rank[i-1];
                    break;
                }
            }
            ArrayList<Integer> list = new ArrayList<>();
            for(int i : map.keySet()) {
                if(map.get(i) == second) {
                    list.add(i);
                }
            }
            Collections.sort(list);
            for(int i : list) {
                System.out.print(i + " ");
            }
            System.out.println();
        }



    }

}