import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        Arrays.sort(lost);
        Arrays.sort(reserve);
        int cnt = 0;
        
        // 여분의 체육복을 가진 학생이 체육복을 잃어버린 경우 처리
        for (int i = 0; i < lost.length; i++) {
            for (int j = 0; j < reserve.length; j++) {
                if (lost[i] == reserve[j]) {
                    lost[i] = -1;
                    reserve[j] = -1;
                    cnt++;
                    break;
                }
            }
        }
        
        // 체육복을 빌려줄 수 있는 학생 처리
        for (int i = 0; i < lost.length; i++) {
            for (int j = 0; j < reserve.length; j++) {
                if (lost[i] - 1 == reserve[j] || lost[i] + 1 == reserve[j]) {
                    reserve[j] = -1; // 빌려준 학생 체크
                    cnt++;
                    break;
                }
            }
        }
        
        int answer = n - lost.length + cnt;
        return answer;
    }
}
