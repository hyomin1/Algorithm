import java.util.*;
class Solution {
    Map<String, Integer> map  = new HashMap<>();
    public String[] solution(String[] orders, int[] course) {
        ArrayList<String> list = new ArrayList<>();
        
        for(int i = 0; i < orders.length; i++) {
            char[] c = orders[i].toCharArray();
            Arrays.sort(c);
            for(int j = 0; j < course.length; j++) {
                if(course[j] <= c.length) {
                    comb(c, course[j], 0, "");
                }
            }
        }
        for(int i = 0; i < course.length; i++) {
            int min = 2;
            ArrayList<String> combination = new ArrayList<>();
            for(String key: map.keySet()) {
                if(key.length() == course[i]) {
                    if(map.get(key) > min) {
                        min = map.get(key);
                        combination.clear();
                        combination.add(key);
                    }
                    else if(map.get(key) == min) {
                        combination.add(key);
                    }
                }
            }
            list.addAll(combination);
        }
        String[] answer = new String[list.size()];
        for(int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        Arrays.sort(answer);
        
        return answer;
    }
    void comb(char[] c, int len, int start, String s) {
        // 조합 길이 조건 충족 시 카운팅
        if(s.length() == len) { 
            map.put(s, map.getOrDefault(s,0) + 1);
            return;
        }
        for(int i = start; i < c.length; i++) {
            comb(c,len, i+1, s + c[i]);
        }
    }
}