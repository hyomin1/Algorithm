import java.util.*;
class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        HashMap<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < survey.length; i++) {
            if(choices[i] < 4) {
                char key = survey[i].charAt(0);
                int value = map.getOrDefault(key,0);
                int newValue = value + 4 - choices[i];
                map.put(key,newValue);
            }
            else {
                char key = survey[i].charAt(1);
                int value = map.getOrDefault(key,0);
                int newValue = value +  choices[i] - 4;
                map.put(key,newValue);
            }
        }
        for(char key : map.keySet()) {
            System.out.print(key);
        }
        if(map.getOrDefault('R',0) >= map.getOrDefault('T',0)) {
            answer += 'R';
        }
        else {
            answer += 'T';
        }
         if(map.getOrDefault('C',0) >= map.getOrDefault('F',0)) {
            answer += 'C';
        }
        else {
            answer += 'F';
        }
         if(map.getOrDefault('J',0) >= map.getOrDefault('M',0)) {
            answer += 'J';
        }
        else {
            answer += 'M';
        }
         if(map.getOrDefault('A',0) >= map.getOrDefault('N',0)) {
            answer += 'A';
        }
        else {
            answer += 'N';
        }
        return answer;
    }
}