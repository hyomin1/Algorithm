import java.util.*;
class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        HashMap<String, Integer> map = new HashMap<>();
        ArrayList<Integer> list = new ArrayList<>();
        for(int i = 0; i < terms.length; i++) {
            String[] term = terms[i].split(" ");
            map.put(term[0], Integer.parseInt(term[1]));
        }
        for(int i = 0; i < privacies.length; i++) {
            String[] privacy = privacies[i].split(" ");
            int dueMonth = map.get(privacy[1]);
            int[] date = new int[3];
            String[] sDate = privacy[0].split("\\.");
            for(int j = 0; j < sDate.length; j++) {
                date[j] = Integer.parseInt(sDate[j]);
            }
            int year = date[0];
            int month = date[1];
            int day = date[2];
            year += (month + dueMonth) / 12;
            month = (month + dueMonth) % 12;
            day -= 1;
            if (month == 0) {
                month = 12;
                year -= 1;
            }
            if (day == 0) {
                day = 28;
                month -=1;
            }
            String[] todays = today.split("\\.");
            int tYear = Integer.parseInt(todays[0]);
            int tMonth = Integer.parseInt(todays[1]);
            int tDay = Integer.parseInt(todays[2]);
            if(tYear > year || (tYear == year && tMonth > month) || (tYear == year && tMonth == month && tDay > day)) {
                list.add(i+1);
            }
            
            
            //System.out.print(year + " " + month + " " + day + " ");
            
            
        }
        int[] answer = new int[list.size()];
        for(int i =0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        return answer;
    }
}