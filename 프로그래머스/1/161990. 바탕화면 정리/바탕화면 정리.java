import java.util.*;
class Solution {
    public int[] solution(String[] wallpaper) {
        int minX = 100;
        int minY = 100;
        int maxX = 0;
        int maxY = 0;
        for(int i = 0; i < wallpaper.length; i++) {
            for(int j = 0; j < wallpaper[i].length(); j++) {
                char c = wallpaper[i].charAt(j);
                if (c == '#') {
                    if(minX > j) minX = j;
                    if(maxX < j) maxX = j;
                    if(minY > i) minY = i;
                    if(maxY < i) maxY = i;
                    
                }
            }
        }
        System.out.print(minX + " " + maxX + " " + minY + " " + maxY);
        int[] answer = {minY, minX , maxY+1, maxX+1};
        
        
        
        return answer;
    }
}