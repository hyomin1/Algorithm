import java.util.*;

class Solution {
    public int solution(int[] order) {
        Stack<Integer> stack = new Stack<>();
        int answer = 0;
        int currentBox = 1;  // 현재 박스 번호를 1부터 시작

        for (int target : order) {
            // 필요한 박스가 나올 때까지 스택에 쌓기
            while (currentBox <= target) {
                stack.push(currentBox++);
            }
            
            // 스택의 맨 위가 우리가 필요한 박스일 때
            if (!stack.isEmpty() && stack.peek() == target) {
                stack.pop();
                answer++;
            } else {
                // 스택의 맨 위가 필요한 박스가 아닐 때
                break;
            }
        }
        
        return answer;
    }
}
