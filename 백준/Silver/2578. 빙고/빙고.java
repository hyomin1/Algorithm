import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[][] bingo = new int[5][5];
        int[][] answers = new int[5][5];
        for(int i = 0; i < 10;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            if(i < 5) {
                for(int j = 0; j < 5; j++)  {
                    bingo[i][j] = Integer.parseInt(st.nextToken());
                }
            }
            else {
                for(int j = 0; j < 5; j++) {
                    answers[i-5][j] = Integer.parseInt(st.nextToken());
                }
            }
        }
        int n = 0, m = 0;
        for(int i = 0; i < 5; i++) {
            for(int j = 0; j < 5; j++) {
                deleteNumber(answers[i][j], bingo);
                int bingoNum = countBingo(bingo);
                if(bingoNum >= 3) {
                    int answer = i * 5 + (j+1);
                    System.out.print(answer);
                    return;

                }
            }
        }


    }
    static void deleteNumber(int num, int[][] bingo) {
        for(int i = 0; i < 5; i++) {
            for(int j = 0; j < 5; j++) {
                if(bingo[i][j] == num) {
                    bingo[i][j] = 0;
                }
            }
        }
    }
    static int countBingo(int[][] bingo) {
        int count = 0;
        for(int i = 0; i < 5; i++) { //행 빙고 확인
            if(isBingo(bingo[i])) count++;
        }
        for(int i = 0; i < 5; i++) { //열 빙고 확인
            if(isBingo(new int[]{bingo[0][i], bingo[1][i],
            bingo[2][i], bingo[3][i], bingo[4][i]})) {
                count++;
            }
        }
        if (isBingo(new int[]{bingo[0][0], bingo[1][1], bingo[2][2], bingo[3][3], bingo[4][4]})) {

            count++;
        } // 대각선 빙고 확인
        if (isBingo(new int[]{bingo[0][4], bingo[1][3], bingo[2][2], bingo[3][1], bingo[4][0]})) {
            count++;
        }
        return count;
    }
    static boolean isBingo(int[] bingoLine) {
        for(int num : bingoLine) {
            if(num != 0) return false;
        }
        return true;
    }
}