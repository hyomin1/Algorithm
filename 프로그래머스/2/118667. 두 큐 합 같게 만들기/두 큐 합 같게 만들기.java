import java.util.*;
class Solution {
    public int solution(int[] queue1, int[] queue2) {
        int answer = 0;
        long sum1 = 0;
        long sum2 = 0;
        int check = (queue1.length + queue2.length) * 2;
        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();
        for(int i = 0; i < queue1.length; i++) {
            sum1 += queue1[i];
            q1.add(queue1[i]);
            sum2 += queue2[i];
            q2.add(queue2[i]);
        }
        while(answer < check) {
            if(sum1 > sum2) { //q1 합 > q2 합
                int n = q1.poll();
                q2.add(n);
                sum1 -= n;
                sum2 += n;
                answer++;
            }
            else if(sum2 > sum1) {
                int n = q2.poll();
                q1.add(n);
                sum2 -= n;
                sum1 += n;
                answer++;
            }
            else {
                return answer;
            }
        }
        return -1;
    }
}