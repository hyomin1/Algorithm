import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        ArrayList<Integer>[] list = new ArrayList[11];
        for(int i = 1; i <= 10; i++) {
            list[i] = new ArrayList<>();
        }
        for(int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int cow = Integer.parseInt(st.nextToken());
            int road = Integer.parseInt(st.nextToken());
            list[cow].add(road);
        }
        int answer = 0;
        for(int i = 1; i <= 10; i++) {
            if(list[i].size() >= 2) {
                for(int j = 0; j < list[i].size()-1; j++) {
                    if(list[i].get(j) != list[i].get(j+1)) {
                        answer++;
                    }
                }
            }
        }
        System.out.println(answer);

    }
}