class Solution {
    public int solution(int[][] sizes) {
        int long_max = 1;
        int short_max = 1;
        for(int i = 0; i < sizes.length; i++) {
            int max = Math.max(sizes[i][0],sizes[i][1]);
            int min = Math.min(sizes[i][0], sizes[i][1]);
            if(max > long_max) long_max = max; //긴 길이중 가장 긴 길이
            if(min > short_max) short_max = min; // 짧은 길이중 가장 긴 길이
        }
        
        
        return long_max * short_max;
    }
}