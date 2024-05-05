import java.util.*;
class Solution {
    public int solution(int k, int[] tangerine) {
        int answer = 0;
        int max = 0;
        for(int i : tangerine) {
            max = Math.max(i,max);
        }
        int[] categories = new int[max+1];
        for(int i = 0; i < tangerine.length; i++) {
            categories[tangerine[i]]++;
        }
        Arrays.sort(categories);
        int sum = 0;
        for(int i = categories.length-1; i >=0; i--) {
            sum += categories[i];
            answer++;
            if (sum >= k) {
                break;
            }
        }
        
        return answer;
    }
}