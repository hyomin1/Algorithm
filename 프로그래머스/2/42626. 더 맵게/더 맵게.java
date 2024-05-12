import java.util.*;
class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        for(int i = 0; i < scoville.length; i++) {
            heap.add(scoville[i]);
        }
        
        while(!heap.isEmpty() && heap.peek() < K) {
            if(heap.size() == 1) {
                answer = -1;
                break;
            }
            int n1 = heap.poll();
            int n2 = heap.poll();
            int res = n1 + n2*2;
            heap.add(res);
            answer++;
        }
        
      
        return answer;
    }
}