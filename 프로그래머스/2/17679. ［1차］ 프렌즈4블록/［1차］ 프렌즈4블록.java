class Solution {
    int answer = 0;
    public int solution(int m, int n, String[] board) {
        
        char[][] c = new char[m][n];
        boolean[][] deleted = new boolean[m][n];
        for(int i = 0; i < m; i++) {
            c[i] = board[i].toCharArray();
        }
        while(true) {
            if(!checkBlock(c, deleted)) {
                break;
            }
            deletedBlock(c,deleted);
            dropBlock(c);
        }

        for(char[] row : c) {
            for(char col : row) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
        
        return answer;
    }
    boolean checkBlock(char[][] c, boolean[][] deleted) {
        boolean check = false;
        for(int i = 0; i < c.length-1; i++) {
            for(int j = 0; j < c[i].length-1; j++) {
                char ch = c[i][j];
                if(ch != '-' && c[i][j+1] == ch && c[i+1][j] == ch
                  && c[i+1][j+1] == ch) {
                    check = true;
                    deleted[i][j] = true;
                    deleted[i+1][j] = true;
                    deleted[i][j+1] = true;
                    deleted[i+1][j+1] = true;
                }
            }
        }
        return check;
    }
    void deletedBlock(char[][] c, boolean[][] deleted) {
        for(int i = 0; i < c.length; i++) {
            for(int j = 0; j < c[i].length; j++) {
                if(deleted[i][j]) {
                    c[i][j] = '-';
                    answer++;
                    deleted[i][j] = false;
                }
            }
        }
    }
    void dropBlock(char[][] c) {
        for(int i = 0; i < c.length; i++) {
            for(int j = 0; j < c[i].length; j++) {
                if(c[i][j] == '-') {
                    for(int k = 0; k < i; k++) {
                        if(c[k][j] != '-') {
                            char tmp = c[k][j];
                            c[k][j] = c[i][j];
                            c[i][j] = tmp;
                        }
                    }
                }
            }
        }
    }
}