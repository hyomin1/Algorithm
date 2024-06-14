import java.io.*;
import java.util.*;
class Main {
	static int N;
	static int[] A;
	static int[] B;
	static StringTokenizer st;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		A = new int[N];
		B = new int[N];
		StringTokenizer st = new StringTokenizer(br.readLine());
		for(int i = 0; i < N; i++) {
			int num = Integer.parseInt(st.nextToken());
			A[i] = num;
			
		}
		st = new StringTokenizer(br.readLine());
		for(int i = 0; i < N; i++) {
		  int num = Integer.parseInt(st.nextToken());
			B[i] = num;
			
		}
		int maxA = findValue(A);
		int maxB = findValue(B);
		System.out.println(maxA + " " + maxB);
		if(maxA > maxB) {
			System.out.println("good");
		}
		else {
			System.out.println("bad");
		}
		
		
	}
	static int findValue(int[] arr) {
		Arrays.sort(arr);
		Map<Integer, Integer> map = new HashMap<>();
		for(int i : arr) {
			map.put(i, map.getOrDefault(i,0) + 1);
		}
		
		int max = 0;
		int index = 0;
		for(int i = 3; i <= arr[N-1]; i++) {
			int count = 0;
			for(int j = i -2; j <= i + 2; j++) {
				if(map.containsKey(j)) {
					count = count + map.get(j);
				}
			}
			if (max < count) {
				max = count;
				index = i;
			}
		}
		return index;
	}
	
	
}