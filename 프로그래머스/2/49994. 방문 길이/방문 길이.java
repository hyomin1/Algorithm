import java.util.*;
class Solution {
    public int solution(String dirs) {
        ArrayList<String> list = new ArrayList<>();
        int answer = 0;
        int[] pos = {0, 0};
        char[] c = dirs.toCharArray();
        for(int i = 0; i < c.length; i++) {
            String currentPos = pos[0] + "" + pos[1];
            if(c[i] == 'U' && pos[1] < 5) {
                pos[1]++;
            }
            else if(c[i] == 'D' && pos[1] > -5) {
                pos[1]--;
            }
            else if (c[i] == 'L' && pos[0] > -5) {
                pos[0]--;
            }
            else if (c[i] == 'R' && pos[0] < 5){
                pos[0]++;
            }
            String movPos = pos[0] + "" + pos[1];
            String chk1 = currentPos + movPos;
            String chk2 = movPos + currentPos;
          
            if(!list.contains(chk1) && !list.contains(chk2) && !currentPos.equals(movPos)) {
                answer++;
                list.add(chk1);
                System.out.println(chk1);
                list.add(chk2);
            }
        }
      
        return answer;
    }
}