import java.util.*;
class Solution {
    public int solution(String[][] clothes) {
        HashMap<String, Integer> map = new HashMap<>();
        int answer = 1;
        for(int i = 0; i < clothes.length; i++) {
            map.put(clothes[i][1],map.getOrDefault(clothes[i][1],0) +1);
        }
        int index = 0;
        int[] categories = new int[map.size()];
        for(String key : map.keySet()) {
            categories[index++] = map.get(key);
        }
        for(int i : categories) {
            System.out.print(i + " ");
        }
        for(int i = 0; i < categories.length; i++) {
            answer *= (categories[i] + 1);
        }
        
        
        answer -= 1;
        
        return answer;
    }
}