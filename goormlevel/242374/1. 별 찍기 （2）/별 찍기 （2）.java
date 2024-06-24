import java.io.*;
class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		int N = Integer.parseInt(input);
		for(int i = 0; i < N; i++) {
			for(int j = N; j > i; j--) {
				System.out.print("*");
			}
			System.out.println();
		}
	}
}