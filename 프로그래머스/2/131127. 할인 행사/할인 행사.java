import java.util.*;
class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        HashMap<String,Integer> map = new HashMap<>();
        
        int answer = 0;
        for(int i = 0; i < want.length; i++) {
            map.put(want[i],number[i]);
        }
        for(int i = 0; i <= discount.length-10; i++) {
            HashMap<String,Integer> disMap = new HashMap<>();
            for(int j = i; j < i + 10; j++) {
                if(!map.containsKey(discount[j])) break;
                disMap.put(discount[j], disMap.getOrDefault(discount[j],0) + 1);
            }
            boolean check = true;
            for(String key : map.keySet()) {
                if(map.get(key) != disMap.get(key)) {
                    check = false;
                    break;
                }
            }
            if(check) {
                answer++;
                
            }
        }
        
        return answer;
    }
}