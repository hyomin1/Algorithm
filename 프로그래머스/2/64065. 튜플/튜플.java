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
        int cnt = 0;
        for(int key : map.keySet()) {
        
            cnt++;
        }
        int[] values = new int[cnt];
        int[] answer = new int[cnt];
        int index = 0;
        for(int key : map.keySet()) {
            values[index++] = map.get(key);
        }
        Arrays.sort(values);
        int size = values.length-1;
        for(int i = 0 ; i< values.length; i++) {
            for(int key: map.keySet()) {
                if(values[i] == map.get(key)) {
                    answer[size--] = key;
                }
            }
        }
        
        
        
        return answer;
    }
}