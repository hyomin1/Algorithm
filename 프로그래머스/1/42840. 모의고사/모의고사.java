import java.util.*;
class Solution {
    public int[] solution(int[] answers) {
        ArrayList<Integer> list = new ArrayList<>();
        int[] p1 = {1,2,3,4,5};
        int[] p2 = {2,1,2,3,2,4,2,5};
        int[] p3 = {3,3,1,1,2,2,4,4,5,5};
        int[] counts = {0, 0, 0};
        for(int i = 0; i < answers.length; i++) {
            if(p1[i%p1.length] == answers[i]) {
                counts[0]++;
            }
            if(p2[i%p2.length] == answers[i]) {
                counts[1]++;
            }
            if(p3[i%p3.length] == answers[i]) {
                counts[2]++;
            }
        }
        int max = 0;
        for(int i = 0; i < 3; i++) {
            max = Math.max(max,counts[i]);
        }
        for(int i = 0; i < 3; i++) {
            if(max == counts[i]) {
                list.add(i+1);
            }
        }
        int[] answer = new int[list.size()];
        for(int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        Arrays.sort(answer);
        return answer;
    }
}