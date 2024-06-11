import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int w = Integer.parseInt(st.nextToken());
        int h = Integer.parseInt(st.nextToken());

        int[][] map = new int[w][h];
        st = new StringTokenizer(br.readLine());

        for(int i = 0; i < h; i++) {
            int block = Integer.parseInt(st.nextToken());
            for(int j = w - block; j < w; j++) {
                map[j][i] = -1;
            }
        }
        int answer = 0;
        for(int i = w - 1; i >=0; i--) {
            ArrayList<Integer> list = new ArrayList<>();
            for(int j = 0; j < h; j++) {
                if(map[i][j] == -1) {
                    list.add(j);
                }
            }
            if(list.size() >= 2) {
                for(int j = 0; j < list.size()-1; j++) {
                    answer += list.get(j+1) - list.get(j) - 1;
                }
            }
        }
        System.out.println(answer);
    }


}