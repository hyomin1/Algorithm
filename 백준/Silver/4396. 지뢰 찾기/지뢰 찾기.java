import java.io.*;

public class Main {
    static int[] dx = {1,-1,1,0,-1,0,1,-1};
    static int[] dy = {1,-1,0,1,0,-1,-1,1};
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());


        String[] bombs = new String[n]; //지뢰 정보
        String[] user = new String[n]; // 사용자가 밟은 정보
        String[] answer = new String[n];

        for(int i = 0; i < n; i++) {
            bombs[i] = br.readLine();
        }
        for(int i = 0; i < n; i++) {
            user[i] = br.readLine();
        }
        for(int i = 0; i < n; i++) {
            answer[i] = "";
            for(int j = 0; j < n; j++) {
                answer[i] += ".";
            }
        }
        boolean check = false;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < bombs[i].length(); j++) {
                if(bombs[i].charAt(j) == '*' && user[i].charAt(j) =='x') {
                    check = true;
                }
                else if (bombs[i].charAt(j) =='.' && user[i].charAt(j) =='x'){ //지뢰 x
                    int count = findBomb(bombs,i,j);
                    answer[i] = answer[i].substring(0,j) + count + answer[i].substring(j+1);
                }

            }
        }
        if(check) { //지뢰 밟은경우 지뢰 있는곳 체크
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < bombs[i].length(); j++) {
                    if(bombs[i].charAt(j) == '*') {
                        answer[i] = answer[i].substring(0,j) + "*" + answer[i].substring(j+1);
                    }
                }
            }
        }
        for(String s: answer) {
            System.out.println(s);
        }


    }
    static int findBomb(String[] bombs,int row, int col) {
        int count = 0;
        for(int i = 0; i < 8; i++) {
            int x = row + dx[i];
            int y = col + dy[i];
            if(x >=0 && x < bombs.length && y >=0 && y < bombs[x].length()) {
                if(bombs[x].charAt(y) == '*') {
                    count++;
                }
            }
        }
        return count;

    }
}