import java.util.*;
class Solution {
    public String[] solution(String[] record) {
        
        Map<String, String> roomMap = new HashMap<>();
        Map<String, String> userMap = new HashMap<>();
        ArrayList<String> list = new ArrayList<>();
        for(int i = 0; i < record.length; i++) {
            String[] str = record[i].split(" ");
            String info = str[0];
            String uid = str[1];
            
            if(!info.equals("Leave")) {
                String name = str[2];
                userMap.put(uid,name);
            }
           
        }
        for(int i = 0; i < record.length; i++) {
            String[] str = record[i].split(" ");
            String info = str[0];
            String uid = str[1];
            String name = userMap.get(uid)+"님이";
            
            if(info.equals("Enter")) {
                list.add(name+" 들어왔습니다.");
            }
            else if(info.equals("Leave")) {
                list.add(name+" 나갔습니다.");
            }
            
        }
        String[] answer = new String[list.size()];
        for(int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        return answer;
    }
}