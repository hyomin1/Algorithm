import java.io.*;
import java.util.*;
class Main {
	static int[] dr = {1,-1,0,0};
	static int[] dc = {0,0,-1,1};
	static int N;
	static int[][] map;
	static int[][] copyMap; //원본 저장용
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		map = new int[N][N];
		copyMap = new int[N][N];
		for(int i = 0; i < N; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			for(int j = 0; j < N; j++) {
				int tree = Integer.parseInt(st.nextToken());
				map[i][j] = tree;
				copyMap[i][j] = tree;
			}
		}
		if(totalTree() == 0) {
			System.out.println(0);
			return;
		}
		int answer = 1;
		while(true) {
			goSpread();
			int res = totalTree();
			if(res == 0) {
				break;
			}
			answer++;
		}

		System.out.println(answer);
		
	}
	static void goSpread() {
		for(int i = 0; i < N; i++) {
			for(int j = 0; j < N; j++) {
				if(copyMap[i][j] != 0) {
					int count = countTree(i,j);
					map[i][j] -= count;
				  if(map[i][j] < 0) map[i][j] = 0;
				}
			}
		}
		moveTree();
	}
	static int countTree(int i, int j) {
		int count = 0; // 주변 나무 개수
			for(int k = 0; k < 4; k++) {
					int r = i + dr[k];
					int c = j + dc[k];
					if(r >= 0 && r < N && c >=0 && c < N && copyMap[r][c] == 0) {	
						count++;
					}
			}
		return count;
	}
	static int totalTree() {
		int total = 0;
		for(int[] i : map) {
			for(int j : i) {
				total += j;
			}
		}
		return total;
	}
	static void moveTree() {
		for(int i = 0; i < N; i++) {
			for(int j = 0; j < N; j++) {
				copyMap[i][j] = map[i][j];
			}
		}
		
	}
}