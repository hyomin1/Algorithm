class Solution {
    public int solution(int[][] sizes) {
        int[] rect = new int[sizes.length];
        for(int i = 0; i < sizes.length; i++) {
            rect[i] = sizes[i][0] * sizes[i][1];
        }
        int max = 0;
        for(int i = 0; i < rect.length;i++) {
            max = Math.max(max, rect[i]);
        }
        int min = 1000001;
        for(int i = 0; i < sizes.length; i++) {
            for(int j = 0; j <sizes.length; j++) {
                int res = sizes[i][0] * sizes[j][1];
                if(res > max) {
                    min = Math.min(min,res);
                }
            }
             
        }
        int answer = min;
        return answer;
    }
}