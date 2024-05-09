import java.util.*;
class Solution {
    public int[] solution(String s) {
        
        s = s.replace("{","");
        s = s.replace("}","");
        HashMap <Integer,Integer> map = new HashMap<>();
        String[] str = s.split(",");
        for(int i = 0; i < str.length; i++) {
            int n = Integer.parseInt(str[i]);
            map.put(n,map.getOrDefault(n,0)+1);
        }
        int[] answer = new int[map.size()];

        for(int key : map.keySet()) {
            answer[map.size() - map.get(key)] = key;
        }
        
        
        
        
        return answer;
    }
}