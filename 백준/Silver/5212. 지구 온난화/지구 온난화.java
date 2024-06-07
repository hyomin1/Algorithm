import java.io.*;
import java.util.*;

public class Main {
    static int[] dx = {1,-1,0,0};
    static int[] dy = {0,0,1,-1};
    static char[][] map;
    static char[][] newMap;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int R = Integer.parseInt(st.nextToken());
        int C = Integer.parseInt(st.nextToken());

        map = new char[R+2][C+2];
        newMap = new char[R+2][C+2];

        for(int i = 0; i < R+2; i++) {
            for(int j = 0; j < C+2; j++) {
                map[i][j] = '.';
                newMap[i][j] = '.';
            }
        }

        for(int i = 1; i <= R; i++) {
            st = new StringTokenizer(br.readLine());
            int index = 1;
            int newIndex = 1;
            char[] c = st.nextToken().toCharArray();
            for(int j = 0; j < c.length; j++) {
                map[i][index++] = c[j];
                newMap[i][newIndex++] = c[j];
            }
        }
        findMap(R,C);
        int minX = R;
        int minY = C;
        int maxX = 1;
        int maxY = 1;

        for(int i = 1; i <=R; i++) {
            for(int j = 1; j <= C; j++) {
                if(newMap[i][j] == 'X') {
                    if(minX > i) minX = i;
                    if(maxX < i) maxX = i;
                    if(minY > j) minY = j;
                    if(maxY < j) maxY = j;
                }
            }
        }
        for(int i = minX; i <= maxX; i++) {
            for(int j = minY; j <= maxY; j++) {
                System.out.print(newMap[i][j]);
            }
            System.out.println();
        }



    }
    static void findMap(int R, int C) {
        for(int i = 1; i <= R; i++) {
            for(int j = 1; j <= C; j++) {
                char c = map[i][j];
                int count = 0;
                if(c == 'X') {
                    for(int k = 0; k < 4; k++) {
                        int x = i+ dx[k];
                        int y = j + dy[k];
                        if(map[x][y] == '.') count++;
                    }
                    if(count >= 3) newMap[i][j] = '.';
                }

            }
        }
    }
}