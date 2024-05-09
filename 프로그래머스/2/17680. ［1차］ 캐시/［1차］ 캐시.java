import java.util.*;
class Solution {
    public int solution(int cacheSize, String[] cities) {
        int answer = 0;
        if (cacheSize == 0) {
            return cities.length * 5;
        }
        ArrayList<String> list = new ArrayList<>();
        for(int i = 0; i < cities.length; i++) {
            cities[i] = cities[i].toLowerCase();
            if(list.contains(cities[i])) {
                int index = list.indexOf(cities[i]);
                list.remove(index);
                list.add(cities[i]);
                answer++;
                continue;
            }
            if (list.size() < cacheSize) {
                list.add(cities[i]);
                answer += 5;
            }
            else {
                list.remove(0);
                list.add(cities[i]);
                answer += 5;
            }
        }
        return answer;
    }
}