import java.util.*;
class Solution {
    boolean[] visited;
    public int solution(String[][] book_time) {
        int answer = 0;
        visited = new boolean[book_time.length];
        Arrays.sort(book_time,(a,b)->{
           return a[0].compareTo(b[0]);
        });
        for(int i = 0; i < book_time.length; i++) {
            if(visited[i]) continue;
            answer++;
            visited[i] = true;
            String[] time1 = book_time[i][1].split(":");
            int endTime = Integer.parseInt(time1[0]) * 60 + 
                Integer.parseInt(time1[1]);
            for(int j = 0; j < book_time.length; j++) {
                if(visited[j]) continue;
                 String[] time2 = book_time[j][0].split(":");
                 int startTime = Integer.parseInt(time2[0]) * 60 + 
                 Integer.parseInt(time2[1]);
                if(startTime >= endTime + 10) {
                    visited[j] = true;
                    endTime = Integer.parseInt(book_time[j][1].split(":")[0]) * 60 +
                              Integer.parseInt(book_time[j][1].split(":")[1]);
                    
                }
            }
        }
        return answer;
    }
}