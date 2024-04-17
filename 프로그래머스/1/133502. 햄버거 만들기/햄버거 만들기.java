import java.util.*;
class Solution {
    public int solution(int[] ingredient) {
        Stack<Integer> stack = new Stack<>();
        int answer = 0;
        for(int i = 0; i < ingredient.length; i++) {
            stack.push(ingredient[i]);
            int n = stack.size();
            if(n >= 4) {
                if(stack.get(n-4) == 1 && stack.get(n-3) == 2 && stack.get(n-2) == 3 && stack.get(n-1) == 1) {
                    answer++;
                    for(int j = 0; j <4; j++) {
                        stack.pop();
                    }
                }
            }
        }
        
        return answer;
    }
}