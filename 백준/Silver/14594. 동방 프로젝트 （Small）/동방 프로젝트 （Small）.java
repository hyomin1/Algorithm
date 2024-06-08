import java.io.*;
import java.util.*;
public class Main {
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Set<Integer> set = new HashSet<>();
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());

        int[] rooms = new int[N+1];
        for(int i = 1; i <= N; i++) {
            rooms[i] = i;
        }
        for(int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            breakRoom(x,y,rooms);
        }
        int answer=  0;
        for(int i = 1; i <= N; i++) {
            if(rooms[i] == i) answer++;
        }
        System.out.println(answer);



    }
    static void breakRoom(int x, int y, int[] rooms) {
        int tmp = 0;
        for(int i = x ; i <=y; i++) {
            if(rooms[i] != i) {
                tmp = rooms[i];
            }
            else if(tmp != 0) {
                rooms[i] = tmp;
            }
            else {
                rooms[i] = x;
            }
        }
    }
}