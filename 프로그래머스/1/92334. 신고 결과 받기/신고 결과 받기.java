import java.util.*;
class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];
        HashMap<String, Integer> map = new HashMap<>();
        HashMap<String, ArrayList<String>> reportMap = new HashMap<>();
        for(int i = 0; i < id_list.length; i++) {
            map.put(id_list[i], i); // index용
            reportMap.put(id_list[i], new ArrayList<>()); //신고 결과 저장
        }
        
        for(int i = 0; i < report.length; i++) {
            String[] str = report[i].split(" ");
            if(!reportMap.get(str[1]).contains(str[0])) {
                reportMap.get(str[1]).add(str[0]); //신고 받은 사람에 신고 한 사람 리스트 저장
            }
        }
        
        for(String str : reportMap.keySet()) {
            if (k <= reportMap.get(str).size()) { // k회 이상 신고 받을시
                for (String rep : reportMap.get(str)) { // 신고한 사람 배열 count ++
                    answer[map.get(rep)]++;
                }
            }
        }
        return answer;
    }
}