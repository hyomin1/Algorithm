import java.util.*;
class Solution {
    public int[] solution(int n) {
        int[][] nums = new int[n][n];
        ArrayList<Integer> list = new ArrayList<>();
        int num = 1;
        int x = -1, y = 0;
        for(int i = 0; i < n; i++) {
           for(int j = i; j < n; j++) {
               if(i % 3 == 0) {
                   x++;
               }
               else if (i % 3 == 1) {
                   y++;
               }
               else if(i % 3 == 2) {
                   x--;
                   y--;
               }
               nums[x][y] = num++;
           }
        }
        for(int i = 0; i < nums.length; i++) {
            for(int j = 0; j <= i; j++) {
                list.add(nums[i][j]);
            }
        }
        int[] answer = new int[list.size()];
        for(int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        
        return answer;
    }
}