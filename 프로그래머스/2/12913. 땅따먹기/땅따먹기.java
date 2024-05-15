class Solution {
    int solution(int[][] land) {
        int answer = 0;
        for(int i = 1; i < land.length; i++) {
            land[i][0] += maxNum(land[i-1][1],land[i-1][2],land[i-1][3]);
            land[i][1] += maxNum(land[i-1][0],land[i-1][2],land[i-1][3]);
            land[i][2] += maxNum(land[i-1][0],land[i-1][1],land[i-1][3]);
            land[i][3] += maxNum(land[i-1][0],land[i-1][1],land[i-1][2]);       
        }
        for(int i = 0; i < 4; i++) {
            answer = Math.max(answer,land[land.length-1][i]);
        }
            
        return answer;
    }
    int maxNum(int x, int y, int z) {
        int max1 = Math.max(x,y);
        int max2 = Math.max(max1,z);
        return max2;
    }
}