import java.util.*;
class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        int index = type(ext);
        int sortIndex= type(sort_by);
        ArrayList<int[]> list = new ArrayList<>();
        
        for(int i = 0; i < data.length; i++) {
                if(val_ext > data[i][index]) {
                    list.add(data[i]);
                }
            
        }
        int[][] answer = new int[list.size()][];
        for(int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        Arrays.sort(answer, (a,b) -> {
            return a[sortIndex] - b[sortIndex];
        });
        return answer;
    }
    int type(String str) {
        switch(str) {
            case "code":
                return 0;
            case "date":
                return 1;
            case "maximum":
                return 2;
            case "remain":
                return 3;
            default:
                return -1;
        }
        
    }
}