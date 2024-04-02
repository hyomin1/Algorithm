import java.util.*;
class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        Arrays.sort(score);
        int idx = score.length - m;
        while(idx >= 0) {
            answer += score[idx] * m;
            idx -= m;
                
        }
        return answer;
    }
}