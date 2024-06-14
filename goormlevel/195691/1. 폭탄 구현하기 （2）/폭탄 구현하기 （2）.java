import java.io.*;
import java.util.*;
class Main {
	static int[] dx = {-1,1,0,0};
	static int[] dy = {0,0,-1,1};
	static char[][] map;
	static int[][] bombMap;
	static int N;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		map = new char[N][N];
		for(int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for(int j = 0; j < N; j++) {
				map[i][j] = st.nextToken().charAt(0);
			}
		}
		bombMap = new int[N][N];
		
		for(int i = 0; i < K; i++) {
			st = new StringTokenizer(br.readLine());
			int r = Integer.parseInt(st.nextToken()) - 1;
			int c = Integer.parseInt(st.nextToken()) - 1;
			dropBomb(r,c);
		}
		int max = bombMap[0][0];
		for(int[] i : bombMap) {
			for(int j : i) {
				max = Math.max(max, j);
			}
		}
		System.out.print(max);
	}
	static void dropBomb(int r, int c) {
		if(map[r][c] != '#') {
			if(map[r][c] == '0') {
				bombMap[r][c]++;
			}
			else if(map[r][c] == '@') {
				bombMap[r][c] += 2;
			}
		}
		for(int i = 0; i < 4; i++) {
			int y = r + dy[i];
			int x = c + dx[i];
			if(x >= 0 && x < N && y >=0 && y < N && map[y][x] != '#') {
				if(map[y][x] == '0') {
					bombMap[y][x]++;
				}
				else if(map[y][x] == '@') {
					bombMap[y][x] += 2;
				}
			}
		}
	}
}