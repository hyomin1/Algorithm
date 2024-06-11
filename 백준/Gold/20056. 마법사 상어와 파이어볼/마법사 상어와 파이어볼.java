import java.io.*;
import java.util.*;

public class Main {
    static int N;
    static int[] dy = {-1,-1,0,1,1,1,0,-1};
    static int[] dx = {0,1,1,1,0,-1,-1,-1};


    static class Fireball {
        int m, s, d;
        public Fireball(int m, int s, int d) {
            this.m = m;
            this.s = s;
            this.d = d;
        }

    }
    static ArrayList<Fireball>[][] map;

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        map = new ArrayList[N][N];
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                map[i][j] = new ArrayList<>();
            }
        }
        for(int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int w = Integer.parseInt(st.nextToken()) -1;
            int h = Integer.parseInt(st.nextToken()) -1;
            int m = Integer.parseInt(st.nextToken());
            int s = Integer.parseInt(st.nextToken());
            int d = Integer.parseInt(st.nextToken());
            map[w][h].add(new Fireball(m, s, d));
        }

        //파이어볼 이동
        for(int i = 0; i < K; i++) {
            move();
            spearte();
        }
        int answer = 0;
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                for(Fireball ball : map[i][j]) {
                    answer += ball.m;
                }
            }
        }
        System.out.println(answer);

    }
    static void move() {
        ArrayList<Fireball>[][] newMap = new ArrayList[N][N];
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                newMap[i][j] = new ArrayList<>();
            }
        }
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                for(Fireball ball : map[i][j]) {
                    int y = (i + N + dy[ball.d] * ball.s % N) % N;
                    int x = (j + N + dx[ball.d] * ball.s % N) % N;
                    newMap[y][x].add(new Fireball(ball.m,ball.s, ball.d));
                }
            }
        }
        map = newMap;
    }
    static void spearte() {
        ArrayList<Fireball>[][] newMap = new ArrayList[N][N];
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                newMap[i][j] = new ArrayList<>();
            }
        }

        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                if(map[i][j].size() > 1) {
                    int totalM = 0, totalS = 0;
                    boolean even = true, odd = true;
                    for(Fireball ball: map[i][j]) {
                        totalM += ball.m;
                        totalS += ball.s;
                        if(ball.d % 2 == 0) odd = false;
                        else even = false;
                    }
                    int m = totalM / 5;
                    int s = totalS / map[i][j].size();
                    if(m > 0) {
                        int[] newDirection = even || odd ? new int[]{0,2,4,6} : new int[]{1,3,5,7};
                        for(int d : newDirection) {
                            newMap[i][j].add(new Fireball(m, s, d));
                        }
                    }
                }
                else if(map[i][j].size() == 1) {
                    newMap[i][j].add(map[i][j].get(0));
                }

            }

        }
        map =newMap;

    }
}