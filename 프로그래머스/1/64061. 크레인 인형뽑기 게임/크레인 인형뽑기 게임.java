import java.util.*;
class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        for(int i = 0; i < board.length; i++) {
            if(board[i][moves[0]-1] != 0) {
                stack.push(board[i][moves[0]-1]);
                board[i][moves[0]-1] = 0;
                break;
            }
        }
        for(int i = 1; i < moves.length; i++) {
            for(int j = 0; j < board.length; j++) {
                if(board[j][moves[i]-1] != 0) {
                    if(!stack.isEmpty() && stack.peek() == board[j][moves[i]-1]) {
                        System.out.print(board[j][moves[i]-1]);
                        stack.pop();
                        answer++;
                    }
                    else {
                        stack.push(board[j][moves[i]-1]);    
                    }
                    board[j][moves[i]-1] = 0;
                    break;
                }
            }
        }
        return answer*2;
    }
}