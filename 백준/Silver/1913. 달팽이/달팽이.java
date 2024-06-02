import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int findNum = Integer.parseInt(br.readLine());
        int[][] board = new int[N][N];
        int sx = 0, sy = 0;
        int ex = N-1, ey = N - 1;
        int num = N * N;
        while(num > 0) {
            // 하단
            for(int i = sy; i <= ey; i++) {
                board[i][sx] = num--;
            }
            sx++;
            //우측
            for(int i = sx; i <= ex; i++) {
                board[ey][i] = num--;
            }
            ey--;
            //상단
            for(int i = ey; i >= sy; i--) {
                board[i][ex] = num--;
            }
            ex--;
            //좌측
            for(int i = ex; i >= sx; i--) {
                board[sy][i] = num--;
            }
            sy++;
        }
        int row = 0, col = 0;
        for(int i = 0; i < board.length; i++) {
            for(int j = 0; j < board.length; j++) {
                if(board[i][j] == findNum) {
                    row = i + 1;
                    col = j + 1;
                }
                bw.write(board[i][j] + " ");
            }
            bw.write("\n");
        }
        
        bw.write(row + " " + col);
        bw.flush();
        bw.close();
        

    }
}