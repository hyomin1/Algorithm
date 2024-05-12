import java.util.*;
class Solution {
    public int[] solution(String msg) {
        
        HashMap<String,Integer> map = new HashMap<>();
        ArrayList<Integer> list = new ArrayList<>();
        boolean[] visited = new boolean[msg.length()];
        for(char c = 'A'; c <= 'Z'; c++) {
            map.put(String.valueOf(c),(int)(c-64));
        }
        for(int i = 0; i < msg.length(); i++) {
            int end = 0;
            if(!visited[i]) {
                for(int j = i+1; j <= msg.length(); j++) {
                String str = msg.substring(i,j);
                if(map.containsKey(str)) {
                    end = j;
                }
            }
            System.out.print(i+ " " + end+ " ");
            for(int k = i; k < end; k++) {
                visited[k] = true;
            }
            list.add(map.get(msg.substring(i,end)));
            if(end == msg.length()) {
                 map.put(msg.substring(i,end),map.size()+1);
            }
            else {
                map.put(msg.substring(i,end+1),map.size()+1);
            }
            
            }    
        
        }
        
        // for(int i = 0; i < visited.length;i++) {
        //     if(!visited[i]) {
        //         int index = map.get(String.valueOf(msg.charAt(i)));
        //         list.add(index);
        //     }
        // }
        int[] answer = new int[list.size()];
        for(int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        
        
        return answer;
    }
}