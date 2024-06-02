import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int[] light = new int[N];
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++) {
            light[i] = Integer.parseInt(st.nextToken());
        }
        for(int i = 0; i < M ; i++) {
            st = new StringTokenizer(br.readLine());
            int cmd = Integer.parseInt(st.nextToken());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            changeLight(light,cmd,x,y);
        }
        for(int i : light) {
            System.out.print(i + " ");
        }
    }
    static void changeLight(int[] light, int cmd, int x, int y) {
        if(cmd == 1) {
            light[x-1] = y;
        }
        else {
            for(int i = x-1; i <= y-1; i++) {
                if(cmd == 2) {
                    light[i] = light[i] ^ 1;
                }
                else if(cmd == 3) {
                    light[i] = 0;
                }
                else {
                    light[i] = 1;
                }
            }
        }
    }
}